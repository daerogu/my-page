# 클라우드컴퓨팅실습 개인과제

개인 소개 페이지와 방명록 Frontend·Backend를 각각 분리된 저장소로 구성하고,
Vercel과 Render에 배포하여 하나의 웹 프로젝트로 연결했습니다.

사용자가 웹에서 개인 소개 페이지를 둘러본 뒤 방명록을 남기는 흐름을 기준으로 구성했습니다.

> **제출 주소 3가지**
>
> | 제출 항목 | 주소 |
> |---|---|
> | GitHub 저장소 | [my-page](https://github.com/daerogu/my-page) · [memo-frontend](https://github.com/daerogu/memo-frontend) · [memo-backend](https://github.com/daerogu/memo-backend) |
> | 자기소개 페이지 | https://my-page-lake-gamma.vercel.app/ |
> | 방명록 페이지 | https://memo-frontend-sand.vercel.app/ |
> | 백엔드 Swagger UI | https://memo-backend-yeu0.onrender.com/docs |
>
> 저장소가 3개로 분리되어 있습니다. **이 저장소(`my-page`)가 전체 구조를 설명하는 진입점입니다.**

## 전체 프로젝트 구조

- **1. 개인 소개 페이지**
  - HTML · CSS · JavaScript
  - Vercel 배포
  - 방명록 Frontend로 이동

  ↓

- **2. 방명록 Frontend**
  - React · Vite
  - Vercel 배포
  - 사용자 입력 및 화면 표시
  - FastAPI Backend API 호출

  ↓

- **3. 방명록 Backend API**
  - FastAPI
  - Render 배포
  - 방명록 조회 · 등록 · 삭제 API 제공
  
  ↓

- **4. Supabase Database**
  - 방명록 데이터 저장 및 유지

# 개인소개 페이지

## 프로젝트 소개

클라우드컴퓨팅실습 개인 과제를 위해 제작한 개인 소개 웹페이지입니다.
HTML, CSS, JavaScript를 활용하여 개인 소개 페이지를 구현하고 Vercel을 통해 배포했습니다.
방명록 페이지(실습)간 양방향 이동이 가능하도록 페이지를 구성하였습니다.

## 프로젝트 목적

클라우드컴퓨팅실습에서 학습한 HTML, CSS, JavaScript 기반의 웹페이지 구현 및 배포 과정을 직접 실습하는 것을 목표로 제작했습니다.
또한 별도로 구현한 React Frontend 및 FastAPI Backend 프로젝트와 연결하여 하나의 웹 프로젝트 형태로 구성했습니다.

## 주요 기능

- 3×3 카드 형태의 자기소개 페이지
- 개인 프로필 및 자기소개
- 전공 및 자격, 업무, MBTI, 취미, 관심 분야 및 수업 목표 소개
- 다크모드 기능
- GOAT 모드 기능
  - 아르헨티나 국기 테마 배경
  - Lionel Messi 이미지 표시
  - Ballon d'Or 8개 이미지 표시
  - My GOAT 카드 강조 효과
- 화면 크기에 따른 반응형 레이아웃
- Guestbook Frontend 페이지 이동 기능

## 사용 기술

- HTML
- CSS
- JavaScript
- GitHub
- Vercel

## 주요 파일 구성

- `index.html` : 개인 소개 페이지 구성
- `style.css` : 페이지 디자인, 다크모드, GOAT 모드 및 반응형 레이아웃
- `script.js` : 다크모드 및 GOAT 모드 동작
- `profile.jpg` : 프로필 이미지
- `messi_1.png` : GOAT 모드 Messi 이미지
- `messi_2.png` : GOAT 모드 Ballon d'Or 이미지

## 배포 주소

| 구분 | 주소 |
| --- | --- |
| 개인 소개 페이지 | https://my-page-lake-gamma.vercel.app/ |
| 방명록 Frontend | https://memo-frontend-sand.vercel.app/ |
| 방명록 Swagger UI | https://memo-backend-yeu0.onrender.com/docs |

## GitHub 저장소

| 프로젝트 | 저장소 |
| --- | --- |
| 개인 소개 페이지 | https://github.com/daerogu/my-page |
| 방명록 Frontend | https://github.com/daerogu/memo-frontend |
| 방명록 Backend | https://github.com/daerogu/memo-backend |

## 배운 점

- React Frontend, FastAPI Backend, Supabase Database가 분리된 3계층 구조를 이해했습니다.
- Vercel과 Render에 각각 배포하고 API를 통해 서비스를 연동했습니다.
- CORS 설정을 통해 허용된 Frontend에서 Backend API를 호출하도록 구성했습니다.
- Supabase를 연결하여 서버가 재시작되어도 방명록 데이터가 유지되도록 구현했습니다.