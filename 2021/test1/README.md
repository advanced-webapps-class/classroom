# 탭별 콘텐츠 보여주기

## 준비

1. [기본 마크업](index.html)에서 시작
1. 크롬 확장프로그램 JSON Formatter 설치

### 콘텐츠 API

- [최근](recent.json)
- [많이본](view.json)
- [실시간인기](popular.json)

### API 설명

- 총 20개의 콘텐츠 묶음

```
  {
    "id": 문서ID,
    "title": 콘텐츠 제목,
    "img": 콘텐츠 대표 이미지,
    "cp": CP,
    "url": 콘텐츠주소
  },
```

## 미션

### github

- private 레파지토리 생성 (1boon-tab)
- 의미에 맞는 commit 메세지 작성
- https://github.com/{본인의ID}/1boon-tab
- `niceaji` [collaborator로 레파지토리 초대](https://hengbokhan.tistory.com/140)

### 코드

1. 1boon 채널 탭 UI구현 (최근,많이본,실시간인기)
1. 각 탭을 누를때마다 해당 API를 사용하여 결과 표시
1. 각 탭이 선택되면 선택된 탭 class(active) 적용
1. 가져온 데이터를 id=list 에 노출
1. 로딩이미지 효과: 각 콘텐츠 노출시에 로딩이미지를 1초 노출후에 콘텐츠 노출
1. API에서 제목, 링크, 이미지, CP 를 적절히 표시
1. 처음 10개만 보여주고 더보기 클릭이 남은 10개 보여주기 (로딩이미지 효과도 구현)
1. JS 에러 발생하면 안됨
1. JS 네이티브 함수 사용, 최신 DOM 사용하여 구현
1. JS 함수화

## 제출

- 4월 29일 0시까지 제출
- 제출: https://forms.gle/7dRPPWQLz42e3MZD6
- 최초 한번만 제출 가능

## 과제 질문

- [여기서만](https://github.com/advanced-webapps-class/start-fe-2021/issues) 받을께요.
