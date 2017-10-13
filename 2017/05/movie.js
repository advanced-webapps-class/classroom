var url = 'http://movie.daum.net/data/movie/movie_info/box_office.json?country=KR&startDate=20170801&endDate=20171013&pageSize=10&pageNo=';
//

getJSON(url, done);

function done(data){

  console.log(data);


}
