console.log('app.js');

function json() {
  fetch('./data.json')
    .then(function(response) {
      response.json().then(function(data) {
        console.log('json data:', data);
        document.getElementById('name').innerHTML = data.name;
      });
    })
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
}

function jsonp() {
  var head = document.querySelector('head');
  var script = document.createElement('script');
  script.src = 'jsonp.js';
  head.appendChild(script);
}

jsonp();