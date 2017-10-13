console.log('ajax.js')

var btn = document.getElementById('btn');

btn.addEventListener('click', load);

function load(){
  console.log('load');

  var request = new XMLHttpRequest();

  request.open('GET', 'http://1boon.kakao.com/index.html', true);
  // console.log(request);

  request.onreadystatechange = function() {
    if(request.readyState === 4) {
      if(request.status === 200){

        console.log(request.responseText)
      }
    }
  }

  request.send();
  console.log('send')

}
