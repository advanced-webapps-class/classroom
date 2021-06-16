# 프론트엔드 학습내용 보여주는 서비스 만들기

## 목표

- [기본 파일구조](src)에서 시작
- JSON데이터를 만들어보고 데이터를 호출하여 학습 화면구성

## 준비

### 데이터 API

#### [class.json](src/class.json): 학습내용 데이터

- title: 수업내용
- docUrl: 수업내용 문서 url
- links: 수업시간에 진행한 도움링크들
- gitUrl: 수업실습 git 디렉토리 url
- date: 수업날짜

```json
  {
    "title": "수업소개",
    "docUrl": "https://start-fe.surge.sh",
    "links": [],
    "gitUrl": "https://github.com/advanced-webapps-class/classroom/tree/gh-pages/2020/01",
    "date": "2021-03-04"
  },
```

#### [quiz.json](src/quiz.json): 퀴즈내용 데이터(중간고사,기말고사 포함)

- title: 퀴즈 제목
- docUrl: 퀴즈 내용 문서 url
- previewUrl: 퀴즈의 이미보기 url (html)
- gitUrl: 퀴즈 실습 코드 url

```json
  {
    "title": "이미지 슬라이드",
    "docUrl": "https://gist.github.com/niceaji/640626074018a93ab4bced4dd9bdcf95",
    "previewUrl": "",
    "gitUrl": ""
  },
```

## 미션

### git

- private 레파지토리 생성 (start-fe-2021)
  - ex) https://github.io/{본인의ID}/start-fe-2021
- 의미에 맞는 commit 메세지 작성
- `niceaji` [collaborator로 레파지토리 초대](https://hengbokhan.tistory.com/140)

### 코드

1. [index.html](src/index.html)과 같은 모습 구현, [미리보기](https://advanced-webapps-class.github.io/classroom/2021/test2/src)
1. [index.html](src/index.html)안에 주석내용 잘 살펴서 구현하기
1. [class.json](src/class.json)은 수업15개에 맞게 나머지 속성 추가(현재 3개만 존재)
1. [quiz.json](src/quiz.json)도 본인에 맞게 속성값 입력 필요
   - 퀴즈결과 html은 모두 배포하여 `previewUrl`에 입력
1. fetch()를 통해서 [class.json](src/class.json),[quiz.json](src/quiz.json) 가져오기 구현
1. json시에 로딩중에 로딩스피너 구현 (마크업 위치 표시)
1. 학습리스트 필터 (마크업 위치표시)
   - 모두: class.json 모든 속성 표시
   - 도움링크: class.json에서 `links.length>0` 이상인 속성들만 표시
   - git: 실습한 git주소가 있는 속성만 표시
   - 최신순: date가 최신순으로 소팅해서 모든 속성 표시` `
1. 퀴즈리스트 필터 (마크업 위치표시)
   - 모두: quiz.json 모든 속성 표시
   - git: 실습한 git주소가 있는 속성만 표시
1. [webpack 빌드 환경](http://start-fe.surge.sh/module/build.html) 구성 
1. JS 에러 발생하면 안됨
1. JS 네이티브 함수 사용, 최신 DOM 사용하여 구현
1. JS 모듈화,함수화

## 제출

- 6월 25일 0시까지 제출
- 제출: https://forms.gle/5avFajDGZLuybfiV9
- 최초 한번만 제출 가능

## 과제 질문

- [여기서만](https://github.com/advanced-webapps-class/start-fe-2021/issues) 받을께요.
