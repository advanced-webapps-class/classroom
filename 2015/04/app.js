
var box = document.querySelectorAll('.box')[0];
var x = 10;

function randomNumber(endNum){
  return Math.floor(Math.random() * endNum) + 1;
}
function moveBox(){

  var value = x + 5;

  box.style.left = value + 'px';

  x = value;
}
function startMove(){
  console.log('start')
  window.setInterval(moveBox, 100);
}


box.addEventListener('click', startMove);
