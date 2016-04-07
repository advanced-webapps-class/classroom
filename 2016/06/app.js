
console.log('app.js');

var apiurl = "http://m.movie.daum.net/data/movie/movie_info/box_office.json?country=KR&startDate=20150101&endDate=20150401&pageSize=10&callback=done&pageNo=";



ajax(apiurl, function(responseText){
    console.log(responseText);
});
