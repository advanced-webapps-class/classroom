# '영어 배우기' 웹앱 만들기

## 준비

1. [기본 마크업](test1.html)에서 시작
1. [test1.css](test1.css)
1. [test1.js](test1.js)

### 콘텐츠 데이터

- [영어 데이터 API](https://gist.githubusercontent.com/niceaji/d34fcd2d593bef75c277fe1f4a0ee519/raw/6698dab524040e1f0d48d4f8282476a5e5b53640/sentences.json)

### 데이터 JSON 설명

- 총 49개의 콘텐츠 묶음

```
	{
		"en": "I have breakfast sometimes", // 영어 문장
		"ko": "나는 때때로 아침 식사를한다"	// 한글 문장
	},
```

## 미션

### github

- private 레파지토리 생성 (stydy-english-app)
- https://github.com/{본인의ID}/stydy-english-app
- `niceaji` [collaborator로 레파지토리 초대](https://hengbokhan.tistory.com/140)

### 요구사항

1. `영어 데이터 API`를 fetch()로 호출하여 한 문장씩 보여주면서 영어학습을 도와주는 앱
1. 최초 로딩시에 `영어 데이터 API`결과를 랜덤하게 한개씩 출력
1. 로딩중에는 `#loading` 노출, 로딩완료후에는 `#box`만 노출
1. 지정된 시간(3초) 한글문장만 보여주고, 지정된 시간(3초)후에 영어문장 노출
1. 지정된 시간(3초)동안에 `#timer`영역이 0~100%로 변하면서 시간흐름 표현
1. `Next 버튼` 클릭하면 다음 문장으로 이동
1. `.count`영역에 `{현재페이지}/{전체페이지}` 출력
1. 영어문장이 노출된 이후에 `Translate 버튼` 클릭시 구글번역 서비스로 이동 ([test1.js](test1.js) 참고)
1. 전체 문장을 끝나면 다시 첫 문장 부터 시작
1. 기능별 함수화, 재사용 가능 코드
1. 의미에 맞는 commit 메세지 작성

### 웹앱 완성 예제

- https://youtube.com/shorts/iDtpfy6QkkI?feature=share

## 제출

- 5월 2일 0시까지 제출
- 제출:
- 최초 한번만 제출 가능

## 과제 질문

- [여기서만](https://github.com/advanced-webapps-class/classroom/issues) 받을께요.
