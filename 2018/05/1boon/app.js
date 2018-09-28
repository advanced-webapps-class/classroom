console.log('1boon');

var url = 'https://1boon.kakao.com/ch/enter.json?page=1&pagesize=10';


getUrlData(url, function(data){
  console.log( data );
})


function getUrlData(url, callback) {
  fetch(url)
    .then(function(response) {
      response.json().then(function(data) {
        // console.log('json data:', data);
        callback(data)
      });
    })
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
}
