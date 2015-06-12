# Note 웹어플리케이션 만들기 

> 실습시간중에 개발했던 Note App 고도화 

## 준비

1. [Note Webapp](https://github.com/advanced-webapps-class/note-webapp) clone 

## 미션

* 상단 메뉴(.menu) 버튼 구성
  * 새노트: 현재 기능 유지
  * 전체화면: [전체화면](http://www.sitepoint.com/html5-full-screen-api/) 기능 추가 
  * 파일로저장: 로컬에 html 저장 되는 기능 추가, [FileSaver.js](https://github.com/eligrey/FileSaver.js) 참고
  * about: 클릭하면 레이어(div)로 center에 어플리케이션정보 나오도록 처리
* 최초 진입시 window.prompt()로 암호를 묻고 암호(암호는 1234)가 맞을 경우에만 어플리케이션 초기화, 암호가 틀리경우 에러메세지 alert 처리  
```javascript
//ex
window.prompt('암호를 입력하세요')
```
* [package.json](http://begin.js.org/nodejs/npm.html) 작성
* [Grunt js build](https://github.com/advanced-webapps-class/grunt-test) 추가, 하나의 JS파일로 빌드 
* Grunt로 [css](https://github.com/gruntjs/grunt-contrib-cssmin) 도 하나의 파일로 빌드 
* `js/src/html-editor.js` 파일에 summernote부분 모듈화 리팩토링
* javascript 에러가 발생하면 안됨
* 모듈화,재사용성 높은 코드에 가산점 (기존 코드도 수정가능)
* 25일 0시 까지 제출  


## 제출

* 결과물을 zip으로 압축후 메일로 제출
