# Note 웹어플리케이션 만들기

> 간단한 자신만의 Note앱 개발

## 준비

1. [Note Webapp 기본](https://github.com/advanced-webapps-class/note-test) 내려받기
1. 여기서 부터 시작

## 미션

* 상단 메뉴(.menu) 버튼 구성
  * 새노트: textarea(#memo)내용이 모두 지워짐
  * 노트저장: localStorage에 textarea내용 저장
  * about: 클릭하면 레이어(div)로 center에 어플리케이션정보 나오도록 처리
  * 전체화면: 버튼 추가하고  누르면 전체화면 모드로 전환
    * 직접 기능구현 및 라이브러리 검색 http://www.sitepoint.com/html5-full-screen-api
* 최초 진입시 localStorage에 저장된 내용이 있으면 textarea에 표시
* [package.json](http://begin.js.org/nodejs/npm.html) 작성
* [gulp](https://github.com/advanced-webapps-class/gulp-test)로 개발환경 구축
  * `/dist` 폴더로 `/src` 소스를 빌드
  * JS파일 빌드
* javascript 에러가 발생하면 안됨
* 모듈화,재사용성 높은 코드에 가산점
* 24일 23시 까지 제출

## 제출

* 결과물을 github에 배포(gh-pages) 하고
* 최종 배포 URL 메일로 제출
