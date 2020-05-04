const $bug = document.querySelector('#bug');
const $box = document.querySelector('.box');
const $wrap = document.querySelector('.wrap');
const $point = document.querySelector('#point');
const $life = document.querySelector('#life');
const wrapWidth = $wrap.offsetWidth;
const bugWidth = $box.offsetWidth;
const bugSpeed = 1500;

let point = 0;
let life = 10;
let timer = 0;

function addPoint() {
  // point = point + 1;
  // point++;
  point += 1;
  $point.innerHTML = point;
  dieBug();
  event.stopPropagation();
}

function dieBug() {
  $bug.style.display = 'none';
  start();
}

function move() {
  $bug.style.display = 'block';
  const x = random(wrapWidth - bugWidth);
  const y = random(wrapWidth - bugWidth);
  console.log(x, y);

  $bug.style.left = x + 'px';
  $bug.style.top = y + 'px';
}
function random(max) {
  return Math.floor(Math.random() * max);
}

function start() {
  clearInterval(timer);
  timer = setInterval(move, bugSpeed);
}
function minusLife() {
  life -= 1;

  $life.innerHTML = life;

  if (life === 0) {
    gameover();
  }
}
function gameover() {
  clearInterval(timer);
  alert('gameover');
}

start();
$bug.addEventListener('click', addPoint);
$box.addEventListener('click', minusLife);
