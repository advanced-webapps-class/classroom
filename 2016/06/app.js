
console.log('app.js');

var page = 1;
var apiurl = "http://m.movie.daum.net/data/movie/movie_info/box_office.json?country=KR&startDate=20150101&endDate=20160401&pageSize=2&pageNo=1";

var wrap = document.getElementById('wrap');
var template = document.getElementById('movieListTemplate').innerHTML;


// 서로  도메인이  달라서  호출할수 없음
// ajax(apiurl, function(responseText){
//     console.log(responseText);
// });
// var data = [
//   {
//     title: '이것은 제목입니다',
//     img: 'http://icon.daumcdn.net/w/icon/1312/19/152729032.png',
//     starRating: 3,
//     link: 'http://daum.net',
//   }
// ];
//
function render(wrap, template, data){

  var html = tmpl(template, {list: data});
  wrap.innerHTML = html;
}



getJSON(apiurl, function(res){
  console.log(res);

  render( wrap, template, res.data);

});
