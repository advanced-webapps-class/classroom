
# 검색 매쉬업 서비스 만들기

## 예제 이미지

![](http://i.imgur.com/pKJAmdp.jpg)

## 규칙

### [Daum 검색 OpenAPI](http://dna.daum.net/apis/search) 사용

* 블로그 검색
* 카페 검색
* 게시판 검색
* 동영상 검색
* 웹 검색
* 이미지 검색
* 지식 검색


###  재사용성 높은 코드 작성

* JS소스 [함수,클래스화](https://github.com/niceaji/javascript-study/blob/gh-pages/doc/oop.md)

### jQuery 사용

* 크로스브라우징 처리를 위하여 사용
* 주요 브라우저에서 동작이 가능 (IE, 파이어폭스, 크롬)


### UI, UX

* [Bootstrap](http://twitter.github.io/bootstrap/index.html) 사용
* [BootStrap Nav](http://twitter.github.io/bootstrap/components.html#navs) 컴포넌트 사용
    * [BootStrap Tab javascript](http://twitter.github.io/bootstrap/javascript.html#tabs)
* 하나의 검색어에 탭을 누를때마다 다른 검색 API 이용하여 질의 보내고 결과 표시
* 검색결과에 이미지가 있을경우에 이미지도 표시
* 검색결과가 더있을때만 더보기 버튼으로 더보기 기능 넣기
* 검색어가 없을경우 '검색어를 넣어주세요' [alert](http://twitter.github.io/bootstrap/components.html#alerts)처리
    * [BootStrap Modal javascript](http://twitter.github.io/bootstrap/javascript.html#modals)
* 검색결과에 원본 결과 링크
* 데이터가 로딩되는 동안 [로딩이미지](http://www.ajaxload.info/) 보여주기

### 제출

* 결과물을 zip으로 압축후 메일로 제출
