# 1boon 서비스 만들기

> 1boon서비스의 JSON API를 이용해서 간단한 1boon 서비스 만들기 


## 준비

1. [기본 마크업](./assets/test1-base.html)에서 시작
1. 크롬 확장프로그램 [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa) 설치


### API

1. 트렌딩 https://1boon.kakao.com/ch/trending.json
1. 이슈 https://1boon.kakao.com/ch/issue.json
1. 엔터 https://1boon.kakao.com/ch/enter.json

#### 파라미터

1. https://1boon.kakao.com/ch/enter.json?pagesize=10&page=2  
1. https://1boon.kakao.com/ch/enter.json?pagesize=10&page=1&callback=done  

```
pagesize = 한 페이지에 보여줄 글수 
page = 현재 페이지
callback = jsonp callback
```

#### 주요 프로퍼티 
```
data(Array)  리스트의 목록배열
  data[].title  제목
  data[].coverImage 이미지
  data[].path 링크  ( https://1boon.kakao.com/{path} 로 링크 걸어주세요)
  data[].totalView 조회수
```


## 미션
 
1. 1boon 채널 탭 UI구현 (트렌딩, 이슈, 엔터)
1. 각 탭을 누를때마다 해당 API를 사용하여  결과 표시
1. 각 탭이 선택되면 `선택된 탭 class(active)` 적용 
1. [fetch](http://begin.js.org/ajax/fetch.html) 사용 
1. 가져온 데이터를 `id=list` 에 노출  ( 위에 `주요 프로퍼티` 에 정의된 내용 노출)
1. `더보기` 버튼 기능 구현 ( page파라미터를 이용 )
1. 데이터가 로딩되는 동안 `로딩마크업` 보여주기 ( 기본마크업 참고)
1. JS 에러 발생하면 안됨
1. JS 네이티브 함수 사용, 최신 DOM 사용하여 구현
1. JS 함수화
1. 모듈별 외부 JS파일 사용
  * 인라인 CSS,JS 사용 안하기

## 제출

* 23일 0시까지 제출 
* 제출:  https://goo.gl/forms/tnlovkHlBVVQDdvU2
