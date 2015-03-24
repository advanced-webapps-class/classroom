
# 많이 본 기사 탭 만들기

## 도움이미지

![](http://i.imgur.com/lvNdqFz.png)

## 구현

* 뉴스, 연예, 스포츠 탭을 갖고 클릭시에 각 [데이터](https://github.com/niceaji/javascript-study/blob/gh-pages/doc/etc/manynews.js) 만 보여야 함
* 최초 기사(제목) 5개만 보여주고 '더보기'버튼 누르면 나머지 갯수만큼 출력
* 기사제목에 링크는 http://media.daum.net/v/{{newsId}} 형태로 세팅

````
    //json 구조
    {
        "newsId":"20140417081105507", //news id
        "cateId":"politics",          // news category
        "cpKorName":"연합뉴스",         // cp name
        "title":"<여객선침몰> \"朴대통령 뜬눈 밤새워\"..靑, 비상근무태세", //기사제목
        "commentCnt":"1873" //댓글수

    }
````

## 규칙

### JSON 데이터 사용

* [많이 본 뉴스 JSON](https://github.com/niceaji/javascript-study/blob/gh-pages/doc/etc/manynews.js)
* 자신의 프로젝트에 카피해서 사용
* 배열에 순서대로 뉴스(news), 연예(enter), 스포츠(sports) object 삽입되어 있는 구조

### Ajax 사용

* 데이터 비동기 호출
* 참고 [Ajax 함수](https://github.com/niceaji/javascript-study/blob/gh-pages/frontend-class/2014/app.js#L23-L37)
* [Ajax?](https://github.com/niceaji/javascript-study/blob/gh-pages/doc/ajax.md)

### HTML 템플릿 사용

* 코드와 마크업의 분리
* 참고 [HTML 템플릿 함수](https://github.com/niceaji/javascript-study/blob/gh-pages/frontend-class/2014/app.js#L3-L21)


### 재사용성 높은 코드 작성

* JS소스 [함수](https://github.com/niceaji/javascript-study/blob/gh-pages/doc/basic.md)?
* 재사용성 높은 코드에 가장 많은 점수

## 도움소스

* [소스](https://github.com/niceaji/javascript-study/tree/gh-pages/frontend-class/2014)
* [미리보기](http://niceaji.github.io/javascript-study/frontend-class/2014/)

## 제출

* 자신의 frontend-class 레파지토리밑에 middle-test 폴더에 배포
* gh-pages 브랜치 이용해서 웹서비스 배포
** ex) http://niceaji.github.io/frontend-class/middle-test/