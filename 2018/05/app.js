console.log('app.js');

function json() {
  var url = 'https://1boon.kakao.com/ch/enter.json?page=1&pagesize=1';
  fetch(url)
    .then(function(response) {
      response.json().then(function(data) {
        console.log('json data:', data);
        // document.getElementById('name').innerHTML = data.name;
      });
    })
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
}
json();

function jsonp() {
  var head = document.querySelector('head');
  var script = document.createElement('script');
  script.src = 'jsonp.js';
  head.appendChild(script);
}

function callback(data) {
  console.log(data)
  document.getElementById('name').innerHTML = data.name;
}
// jsonp();