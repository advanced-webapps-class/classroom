const $box = document.querySelector('.box');
const $bug = document.querySelector('#bug');
const $point = document.querySelector('#point');
const $life = document.querySelector('#life');
const bugWidth = $bug.offsetWidth;
const bugHeight = $bug.offsetHeight;
const boxWidth = $box.offsetWidth - bugWidth;
const boxHeight = $box.offsetHeight - bugHeight;
const bugSpeed = 2000; // 1000 = 1sec
let point = 0;
let life = 10;
let intervalID = 0;

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function moveBug() {
  console.log('moveBug');
  $bug.style.display = 'block';
  const x = getRandomNumber(boxWidth);
  const y = getRandomNumber(boxHeight);
  $bug.style.left = `${x}px`;
  $bug.style.top = `${y}px`;
}
function startBug() {
  clearInterval(intervalID);
  intervalID = setInterval(moveBug, bugSpeed);
}

function hitBug(event) {
  point++;
  $point.innerHTML = point;
  $bug.style.display = 'none';
  startBug();
  event.stopPropagation();
}
function minusLife() {
  life--;
  $life.innerHTML = life;

  if (life === 0) {
    alert('Game Over');
  }
}
function init() {
  $bug.addEventListener('click', hitBug);
  $box.addEventListener('click', minusLife);
  startBug();
}

init();
