# ACCORD
<img width="485" height="187" alt="accord-png" src="https://github.com/user-attachments/assets/51cc2440-6796-4c5e-bf13-7e64b89faaa5" />


### 개발자들을 위한 온라인 협업툴!
##### 피그마/디스코드/노션 따로사용하세요?
##### ACCORD 하나로 협업해요!


---
### 리포지터리 링크

* **소개 링크 :** https://github.com/yoda-yoda/Project4_accord-overview
* **backend (spring) :** https://github.com/yoda-yoda/Project4_accord-backend
* **frontend (react) :** https://github.com/yoda-yoda/Project4_accord-frontend
* **api-gateway :** https://github.com/yoda-yoda/Project4_accord-api-gateway
* **go-backend :** https://github.com/yoda-yoda/Project4_accord-go-backend
* **signaling server :** https://github.com/yoda-yoda/Project4_accord-signaling-server
* **turn server :** https://github.com/yoda-yoda/Project4_accord-turn-server
* **stun server :** https://github.com/yoda-yoda/Project4_accord-stun-server 


---


# 목차
1. [팀원 소개 및 역할](#팀원-소개-및-역할)
2. [사용 기술 스택](#사용-기술-스택)
3. [도메인 및 API 명세](#도메인-및-API-명세)
4. [프로젝트 개발 일정](#프로젝트-개발-일정)
5. [아키텍쳐](#아키텍쳐)
6. [플로우차트](#플로우차트)
7. [ERD](#ERD)

# 팀원 소개 및 역할

<table>
  <thead>
    <tr>
      <th style="text-align: center;">이름</th>
      <th style="text-align: center;">역할</th>
      <th style="text-align: center;">담당 업무</th>
      <th style="text-align: center;">이메일</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center;"><b>박유빈</b></td>
      <td style="text-align: center;">팀장 <br> Backend/Frontend</td>
      <td style="text-align: center;">
        <b>#공통 작업</b><br>
        - ERD/Figma/Flowchart 설계<br><br>
        <b>#주요 업무</b><br>
        - API Gateway 개발<br>
        - STUN, TURN 서버 개발<br>
        - Signaling 서버 개발<br>
        - GO 백엔드 서버 개발<br>
        - 몽고DB 및 Redis 구성<br>
        - CI/CD 구성<br>
        - React 프론트엔드 개발<br>
        - 기술 공유 및 일정 조율
      </td>
      <td style="text-align: center;"><a href="mailto:hazing0910@gmail.com">hazing0910@gmail.com</a></td>
    </tr>
    <tr>
      <td style="text-align: center;"><b>이시현</b></td>
      <td style="text-align: center;">팀원 <br> Backend/Frontend</td>
      <td style="text-align: center;">
        <b>#공통 작업</b><br>
        - ERD/Figma/Flowchart 설계<br><br>
        <b>#주요 업무</b><br>
        - S3를 통한 프로필 이미지 CRUD 기능 개발<br>
        - RabbitMQ를 통한 채팅 기능 개발<br>
        - React 프론트 UI 제작
      </td>
      <td style="text-align: center;"><a href="mailto:tlgus7777@gmail.com">tlgus7777@gmail.com</a></td>
    </tr>
    <tr>
      <td style="text-align: center;"><b>정석환</b></td>
      <td style="text-align: center;">팀원 <br> Backend/Frontend</td>
      <td style="text-align: center;">
        <b>#공통 작업</b><br>
        - ERD/Figma/Flowchart 설계<br><br>
        <b>#주요 업무</b><br>
        - SMTP 메일링 서비스를 이용한 팀 초대 기능 개발<br>
        - 팀프로젝트 칸반보드 기능 개발<br>
        - aop 기능 개발<br>
        - React 칸반보드 프론트 UI 제작
      </td>
      <td style="text-align: center;"><a href="mailto:jsver12@gmail.com">jsver12@gmail.com</a></td>
    </tr>
    <tr>
      <td style="text-align: center;"><b>심윤보</b></td>
      <td style="text-align: center;">팀원 <br> Backend/Frontend</td>
      <td style="text-align: center;">
        <b>#공통 작업</b><br>
        - ERD/Figma/Flowchart 설계<br><br>
        <b>#주요 업무</b><br>
        - OAuth2.0 로그인 개발<br>
        - JWT 키롤링 기능 개발<br>
        - Spring 백엔드 gRPC 클라이언트 개발<br>
        - 관리자 기본기능 개발 <br>
        - React 프론트 UI 제작
      </td>
      <td style="text-align: center;"><a href="mailto:ensoary@gmail.com">ensoary@gmail.com</a></td>
    </tr>
    <tr>
      <td style="text-align: center;"><b>최요셉</b></td>
      <td style="text-align: center;">팀원 <br> Backend/Frontend</td>
      <td style="text-align: center;">
        <b>#공통 작업</b><br>
        - ERD/Figma/Flowchart 설계<br><br>
        <b>#주요 업무</b><br>
        - 프로젝트 팀 구성 개발<br>
        - 팀원 모집 게시판 CRUD 기능 개발<br>
        - 팀원 모집 게시판 댓글 관련 기능 개발<br>
        - React 프론트 UI 제작
      </td>
      <td style="text-align: center;"><a href="mailto:aslopeys941@gmail.com">aslopeys941@gmail.com</a></td>
    </tr>
  </tbody>
</table>
<br>


# 사용 기술 스택
<div style="display: flex; flex-wrap: wrap; gap: 10px;">
  <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=Spring&logoColor=white">
  <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=Java&logoColor=white">
  <img src="https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=Go&logoColor=white">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
  <img src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=MariaDB&logoColor=white">
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=MongoDB&logoColor=white">
  <img src="https://img.shields.io/badge/AWS%20S3-569A31?style=for-the-badge&logo=Amazon%20S3&logoColor=white">
  <img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=Redis&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black">
  <img src="https://img.shields.io/badge/WebRTC-1E90FF?style=for-the-badge&logo=WebRTC&logoColor=white">
  <img src="https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=Prometheus&logoColor=white">
  <img src="https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=Grafana&logoColor=white">
  <img src="https://img.shields.io/badge/gRPC-4285F4?style=for-the-badge&logo=gRPC&logoColor=white">
  <img src="https://img.shields.io/badge/Consul-593D88?style=for-the-badge&logo=Consul&logoColor=white">
  <img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white">
  <img src="https://img.shields.io/badge/Pion-29ABE2?style=for-the-badge&logo=webrtc&logoColor=white">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
  <img src="https://img.shields.io/badge/Fiber-6C5DD3?style=for-the-badge&logo=Gofiber&logoColor=white">
  <img src="https://img.shields.io/badge/AlanAI-FF5722?style=for-the-badge&logo=alan-ai&logoColor=white">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white">
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white">
  <img src="https://img.shields.io/badge/DnD_Kit-FF8C00?style=for-the-badge">
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white">
</div>
<br>
<br>

# 도메인 및 API 명세
https://accord.my/
<br>
<details>
<summary>
  API 명세서 Swagger ver.
</summary>
  
<img width="1304" height="4015" alt="accordswagger" src="https://github.com/user-attachments/assets/7173bfe9-f4e0-46d1-ace8-360e8976d0d9" />

  
</details>

## 팀관리 (위임 및 권한 관련 API)

| Method | Endpoint                                        | Description                   |
|--------|-------------------------------------------------|-------------------------------|
| **GET**    | `/api/teams/{teamId}`                             | 팀 조회                        |
| **PUT**    | `/api/teams/{teamId}`                             | 팀 이름 수정                    |
| **DELETE** | `/api/teams/{teamId}`                             | 팀 삭제                        |
| **POST**   | `/api/members/teams`                              | 팀 생성                        |
| **POST**   | `/api/members/teams/members/{teamId}`             | 팀에 구성원 등록                |
| **GET**    | `/api/members/teams/{memberId}`                   | 특정 회원의 팀 목록 조회         |
| **GET**    | `/api/members/team-members/{teamId}/{memberId}`    | 팀원 상세 조회 또는 초대 확인       |
| **GET**    | `/api/members/team-members/search`                 | 팀 멤버 검색                    |

---

## 조인보드 (가입 게시판) API

| Method | Endpoint                  | Description                 |
|--------|---------------------------|-----------------------------|
| **GET**    | `/api/join-board/{joinBoardId}`      | 가입 게시판 게시글 상세 조회        |
| **PUT**    | `/api/join-board/{joinBoardId}`       | 게시글 수정                         |
| **DELETE** | `/api/join-board/{joinBoardId}`       | 게시글 삭제                         |
| **GET**    | `/api/join-board`                     | 가입 게시판 전체 게시글 조회        |
| **POST**   | `/api/join-board`                     | 게시글 생성                         |
| **POST**   | `/api/join-board/search`              | 게시판 내 글 검색                   |
| **GET**    | `/api/join-board/sort-by=title`       | 게시글 제목 기준 정렬 조회            |

### 댓글(코멘트) 관련

| Method | Endpoint                | Description         |
|--------|-------------------------|---------------------|
| **PUT**    | `/api/comment/{commentId}`        | 댓글 수정            |
| **DELETE** | `/api/comment/{commentId}`        | 댓글 삭제            |
| **GET**    | `/api/comment/{joinBoardId}`      | 댓글 조회            |
| **POST**   | `/api/comment/{joinBoardId}`      | 댓글 작성            |
| **GET**    | `/api/joinBoard/{joinBoardId}/comment/{commentId}` | 특정 댓글 또는 대댓글 조회 |

---

## 회원정보관리 (닉네임 변경 및 회원정보 조회 API)

| Method | Endpoint                      | Description         |
|--------|-------------------------------|---------------------|
| **PATCH** | `/api/member/nicknames`          | 닉네임 변경            |
| **GET**    | `/api/member/userinfos`          | 회원(유저) 정보 조회     |
| **GET**    | `/api/member/profiles`           | 회원 프로필 조회         |

---

## 팀 캔버스 (파일 업로드 등) API

| Method | Endpoint                  | Description             |
|--------|---------------------------|-------------------------|
| **POST**   | `/api/images/canvases`        | 캔버스 파일 업로드(저장)  |
| **GET**    | `/api/images/canvases`         | 캔버스 파일 조회           |
| **DELETE** | `/api/images/canvases`         | 캔버스 파일 삭제           |

---

## 관리자(Admin) API

| Method | Endpoint                                         | Description        |
|--------|--------------------------------------------------|--------------------|
| **PUT**    | `/api/admin/members/{memberId}/status`           | 회원 상태 변경        |
| **GET**    | `/api/admin/members/search`                      | 회원 검색            |
| **GET**    | `/api/admin/boards/{boardId}/boards`             | 특정 보드(게시글) 조회 |
| **DELETE** | `/api/admin/boards/{boardId}`                    | 보드(게시글) 삭제     |
| **DELETE** | `/api/admin/boards/{boardId}/ban`                | 게시글 차단, 제재     |

---

## 프로필이미지 (Profile Image) API

| Method | Endpoint                          | Description         |
|--------|-----------------------------------|---------------------|
| **POST**   | `/api/members/profile-images`      | 프로필 이미지 등록    |
| **DELETE** | `/api/members/profile-images`      | 프로필 이미지 삭제    |

---

## 채팅 API

| Method | Endpoint             | Description        |
|--------|----------------------|--------------------|
| **POST**   | `/api/chat/messages`     | 채팅 메시지 전송하기    |

---

## 팀 노트 API

| Method | Endpoint              | Description  |
|--------|-----------------------|--------------|
| **POST**   | `/api/members/notes`        | 팀 노트 생성      |
| **DELETE** | `/api/members/notes`        | 팀 노트 삭제      |

---

## 인증 관리 (JWT/토큰 등)

| Method | Endpoint             | Description         |
|--------|----------------------|---------------------|
| **POST**   | `/api/auth/reissue`    | 토큰 재발급          |
| **POST**   | `/api/auth/logout`     | 로그아웃              |
| **DELETE** | `/api/auth`            | 회원 탈퇴 혹은 인증 취소 |

---

## 칸반보드 (Kanban Board) API

| Method | Endpoint                          | Description                     |
|--------|-----------------------------------|---------------------------------|
| **PUT**    | `/api/kanbanboardcard/update`     | 카드 내용 변경                    |
| **PUT**    | `/api/kanbanboard/update`         | 칸반보드(보드) 수정               |
| **POST**   | `/api/kanbanboardcard/switch`     | 카드 스위치(컬럼 간 이동 등)       |
| **POST**   | `/api/kanbanboardcard/create`     | 카드 생성                         |
| **POST**   | `/api/kanbanboard/switch`         | 칸반보드 스위치                  |
| **POST**   | `/api/kanbanboard/create`         | 칸반보드 생성                     |
| **GET**    | `/api/kanbanboard/{teamId}`       | 칸반보드 조회                     |
| **DELETE** | `/api/kanbanboardcard/delete`     | 카드 삭제                         |
| **DELETE** | `/api/kanbanboard/delete`         | 칸반보드 삭제                     |

---

<br>

# 개발일정

### Week 1 (01/08 ~ 01/11) | 기획 및 설계
- **01/08**  
  - 아이디어 기획 및 주요 기술 스택, 아키텍처 설계
- **01/09**  
  - 세부 요구사항 분석 및 확정, Git 세팅 및 프로젝트 생성
- **01/10**  
  - DB 모델링 및 ERD 설계, API 설계 초안 작성, MVP 기준 핵심 기능 목록 확정
- **01/11**  
  - 1차 점검 (설계 완료 검토 및 피드백 반영)
  - [FRONT] 팀 노트 기능 추가
  - [TURN] 턴 서버 추가

---

### Week 2 (01/13 ~ 01/17) | 핵심 기능 개발 (1차)
- **01/13**  
  - 기본 인증 및 권한 관리 기능 개발 (JWT, OAuth 등)  
  - [SPRING BACKEND] API 기본 기능 개발 (CRUD)  
  - [GO] note CRUD 기능 개발
- **01/16**  
  - [FRONT] Header 및 Sidebar UI 구조 개선
- **01/18**  
  - [SPRING BACKEND] 데이터 저장 및 조회 기능 구현 (DB 연동)
- **01/19**  
  - [SPRING BACKEND] 프로필 이미지파일 업로드 기능 개발 (AWS S3 연동)

---

### Week 3 (01/20 ~ 01/24) | 핵심 기능 개발 (2차) & UI 연동
- **01/20**  
  - [SPRING BACKEND] 비동기 처리 로직 적용 (RabbitMQ 활용)
- **01/21**  
  - 2차 점검 (기본 기능 구현)
- **01/22**  
  - [FRONT] 프로필 업로드 기능 및 UI 추가  
  - API 확장 및 응답 최적화
- **01/23**  
  - 클라이언트와 API 연동 시작
- **01/24**  
  - [SPRING BACKEND] API-GATEWAY 설정  
  - 주요 화면 UI 개발 (React 등)  
  - WebSocket, 실시간 알림 기능 추가

---

### Week 4 (01/27 ~ 01/31) \[2025년 설 연휴\] | 기능 확장 및 최적화
- **01/28**  
  - 3차 점검 (핵심 기능 및 UI 검토)
- **01/29**  
  - 성능 개선  
  - 예외 처리 및 로깅 시스템 개선
- **01/30**  
  - 캐싱 및 성능 최적화 (Redis, Query 튜닝)
- **01/31**  
  - 보안 검토 및 조치 (CORS, CSRF, SQL Injection 대응)

---

### Week 5 (02/03 ~ 02/07) | 테스트 및 배포
- **02/01**  
  - 관리 도구 개발 (관리자 페이지 등)
- **02/02**  
  - E2E 테스트(End-to-End) 진행
- **02/03**  
  - 운영 환경 구성 (서버 배포 준비)
- **02/04**  
  - 4차 점검 (운영 준비 검토)
- **02/05**  
  - [FRONT] Kanban Board 기능 구현  
  - [FRONT] Footer 디자인 개선 및 편의성 최적화  
  - [FRONT] 댓글 기능 개발
- **02/06**  
  - 사용자 피드백 수집 및 개선
- **02/07**  
  - 긴급 버그 수정 및 최적화
- **02/08**  
  - Beta 버전 최초 배포
- **02/09**  
  - 편의성 개선 패치 배포

---

### Week 6 (02/10 ~ 02/11) | 안정화
- **02/10**  
  - 최종 점검 및 안정화  
  - 발표자료 작성
- **02/11**  
  - 정식 배포  
  - 프로젝트 완료

<br>

# 아키텍쳐
<img width="833" height="782" alt="architecture" src="https://github.com/user-attachments/assets/0dbaf6bd-39dd-4ba8-a9a5-77c1dcebf875" />


# 플로우차트
<img width="1396" height="1045" alt="flow" src="https://github.com/user-attachments/assets/8cb7a1a1-d02d-4358-86e5-da820ea9f6cd" />

# ERD
<img width="2052" height="769" alt="erd" src="https://github.com/user-attachments/assets/b6e1e9e2-d85e-4ea3-b819-fda5e0404fd8" />
<img width="528" height="478" alt="mongodb" src="https://github.com/user-attachments/assets/e860c072-c9a5-4aee-9bc6-cc250a50a514" />

