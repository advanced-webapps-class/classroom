// // var log = document.getElementById('log');
// // console.log(log)
// // log.innerHTML = '안녕';
//
// var log = document.getElementById('log');
//
// console.log(log)
//
// // var a = document.querySelectorAll('#log a');
// //
// // console.log(a.length, a[0], a[1]);
//
// var div = document.createElement('div');
// div.style.border = "1px solid red";
// div.innerHTML = "hello!!";
// log.appendChild(div);
//
//
// // log.innerHTML = log.innerHTML +'<div style="color:red">hello</div>';
// log.innerHTML += '<div style="color:red">hello</div>';
// window.addEventListener('load', function(){
//   console.log('load1');
// });
//
// window.addEventListener('load', function(){
//   console.log('load2')
// });
// window.onload = function(){
//     alert("load");
// };



// var log = document.getElementById('log');
//
// function printLog(event){
//   console.log('log!!!')
// }
//

// log.addEventListener('click', printLog )

// https://github.com/niceaji/frontend-web



function addEvent(){

  var divs = document.querySelectorAll('#wrap div');
  // console.log(divs);

  function changeBg(event){
    console.log('changeBg');

    // divs[1].style.backgroundColor = 'blue';
    // console.log(event.currentTarget);
    event.currentTarget.style.backgroundColor = 'blue';

  }
  for(var i=0; i < divs.length; i++ ) {
    divs[i].addEventListener('click', changeBg)
  }
}


var str = '';
var wrap = document.getElementById('wrap');



// function printRow(startColor){
//
//   for(var j=0; j<4; j++){
//
//     var className = startColor;
//
//     if(j % 2) {
//
//     }
//     else {
//
//
//     }
//     str += '<div class=" '+ className  +' "></div>';
//   }
// }


for(var i=0; i<4; i++){
  wrap.innerHTML +=  printRow();
}

// for(var i=0; i <= 15; i++){
//   var className = '';
//   if(i % 2) {
//     className = 'white';
//   }
//   else {
//     className = 'black';
//   }
//   str += '<div class=" '+ className  +' "></div>'
// }

wrap.innerHTML = str;

// divs[2].addEventListener('click', changeBg)
// divs[3].addEventListener('click', changeBg)
