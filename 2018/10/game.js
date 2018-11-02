var wrapWidth = 300;
var bugWidth = 30;
var bug = document.querySelector('#bug');

function move() {
  var x = random(wrapWidth - bugWidth);
  var y = random(wrapWidth - bugWidth);
  console.log(x, y);

  bug.style.left = x + 'px';
  bug.style.top = y + 'px';
}
function random(max) {
  return Math.floor(Math.random() * max);
}

setInterval(move, 1000);
