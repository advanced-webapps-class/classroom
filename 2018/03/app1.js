function test(){
  console.log("test()");
}
// var id = setTimeout(test, 1000);
var id = setInterval(test, 1000);

// app2.js  불러오기
var head = document.querySelector('head');
var script = document.createElement('script');
script.src = 'app2.js';
head.appendChild(script);
