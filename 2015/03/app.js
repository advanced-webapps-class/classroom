
// 박스오피스  데이터 가져오기
var boxOfficeAPI = 'http://m.movie.daum.net/data/movie/movie_info/box_office.json?country=KR&startDate=20150101&endDate=20150401&pageSize=10&pageNo=1';
var listTemplate = $('listTemplate').innerHTML;

// console.log(listTemplate);

getJSON(boxOfficeAPI , function(boxOfficeData){

  console.log(boxOfficeData)

  // 템플릿 가져와서  해석하기
  var html = tmpl(listTemplate, {list: boxOfficeData.data});


  // 해석된 html을 $wrap 넣어주기
  $('wrap').innerHTML = html;


});
