
console.log('app.js');

var apiurl = "http://m.movie.daum.net/data/movie/movie_info/box_office.json?country=KR&startDate=20160101&endDate=20160401&pageSize=10&pageNo=1";



// 서로  도메인이  달라서  호출할수 없음
// ajax(apiurl, function(responseText){
//     console.log(responseText);
// });

getJSON(apiurl, function(data){
  console.log(data);
});
