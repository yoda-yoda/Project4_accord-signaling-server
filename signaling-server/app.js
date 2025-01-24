#!/usr/bin/env node

import express from 'express'
import { WebSocketServer } from 'ws'
import * as map from 'lib0/map'
import Consul from 'consul'
import proxy from 'express-http-proxy'

const wsReadyStateConnecting = 0
const wsReadyStateOpen = 1
const wsReadyStateClosing = 2
const wsReadyStateClosed = 3

const pingTimeout = 30000
const port = process.env.PORT || 4444

// Create an Express app
const app = express()

// Basic route for server health check
app.get('/', (req, res) => {
  res.send('Signaling server is up and running!')
})

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' })
})

// Create an HTTP server and bind it to the Express app
const server = app.listen(port, () => {
  console.log(`Signaling server running on http://localhost:${port}`)
})

// Create WebSocket server
const wss = new WebSocketServer({ noServer: true })

/**
 * Map of topic names to sets of subscribed clients.
 * @type {Map<string, Set<any>>}
 */
const topics = new Map()

/**
 * Send a message to a connection
 * @param {any} conn
 * @param {object} message
 */
const send = (conn, message) => {
  if (conn.readyState !== wsReadyStateConnecting && conn.readyState !== wsReadyStateOpen) {
    conn.close()
  }
  try {
    conn.send(JSON.stringify(message))
  } catch (e) {
    conn.close()
  }
}

/**
 * Setup a new client connection
 * @param {any} conn
 */
const onconnection = conn => {
  const subscribedTopics = new Set()
  let closed = false
  let pongReceived = true

  const pingInterval = setInterval(() => {
    if (!pongReceived) {
      conn.close()
      clearInterval(pingInterval)
    } else {
      pongReceived = false
      try {
        conn.ping()
      } catch (e) {
        conn.close()
      }
    }
  }, pingTimeout)

  conn.on('pong', () => {
    pongReceived = true
  })

  conn.on('close', () => {
    subscribedTopics.forEach(topicName => {
      const subs = topics.get(topicName) || new Set()
      subs.delete(conn)
      if (subs.size === 0) {
        topics.delete(topicName)
      }
    })
    subscribedTopics.clear()
    closed = true
  })

  conn.on('message', message => {
    if (typeof message === 'string' || message instanceof Buffer) {
      message = JSON.parse(message)
    }
    if (message && message.type && !closed) {
      switch (message.type) {
        case 'subscribe':
          (message.topics || []).forEach(topicName => {
            if (typeof topicName === 'string') {
              const topic = map.setIfUndefined(topics, topicName, () => new Set())
              topic.add(conn)
              subscribedTopics.add(topicName)
            }
          })
          break
        case 'unsubscribe':
          (message.topics || []).forEach(topicName => {
            const subs = topics.get(topicName)
            if (subs) {
              subs.delete(conn)
            }
          })
          break
        case 'publish':
          if (message.topic) {
            const receivers = topics.get(message.topic)
            if (receivers) {
              message.clients = receivers.size
              receivers.forEach(receiver => send(receiver, message))
            }
          }
          break
        case 'ping':
          send(conn, { type: 'pong' })
      }
    }
  })
}

wss.on('connection', onconnection)

server.on('upgrade', (request, socket, head) => {
  const handleAuth = ws => {
    wss.emit('connection', ws, request)
  }
  wss.handleUpgrade(request, socket, head, handleAuth)
})

// ================= Consul Integration Start =================

const consul = new Consul({
  host: '172.30.1.53', // Consul 서버 주소
  port: 8500,          // Consul 서버 포트
  promisify: true,
})

const serviceId = 'signaling-server-' + port // 고유 서비스 ID

/**
 * Consul에 서비스 등록
 */
const registerWithConsul = async () => {
  try {
    await consul.agent.service.register({
      id: serviceId,
      name: 'signaling-server',
      address: '172.30.1.53',
      port: port,
      check: {
        http: `http://172.30.1.53:${port}/health`,
        interval: '10s',
        timeout: '5s',
        deregistercriticalserviceafter: '1m',
      },
    })
    console.log('Service registered with Consul')
  } catch (err) {
    console.error('Failed to register service with Consul:', err)
  }
}

/**
 * Consul에서 서비스 해제
 */
const deregisterWithConsul = async () => {
  try {
    await consul.agent.service.deregister(serviceId)
    console.log('Service deregistered from Consul')
  } catch (err) {
    console.error('Failed to deregister service from Consul:', err)
  }
}

// 서버 시작 시 Consul에 등록
registerWithConsul()

// 프로세스 종료 시 Consul에서 서비스 해제
process.on('SIGINT', async () => {
  await deregisterWithConsul()
  process.exit(0)
})

process.on('SIGTERM', async () => {
  await deregisterWithConsul()
  process.exit(0)
})

// ================= Consul Integration End =================
