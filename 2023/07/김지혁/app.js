const $box = document.querySelector('.box');
const $bug = document.querySelector('#bug');
const $point = document.querySelector('#point');
const $life = document.querySelector('#life');

const boxRect = $box.getBoundingClientRect();
let point = parseInt($point.innerText);
let life = parseInt($life.innerText);

function plusPoint() {
  point++;
  $point.innerText = point;
}

function minusPoint() {
  point--;
  $point.innerText = point;
  if (life == 0) {
    gameOver();
  }
  if (point <= 0) {
    newLife();
  }
}

function newLife() {
  alert(`You're point is 0!`);
  $point.innerText = 0;
  life--;
  $life.innerText = life;
}

function gameOver() {
  alert('Game Over!!');
}

function randomPosition(event) {
  event.stopPropagation();
  // 0 ~ 380
  const x = Math.floor(Math.random() * (boxRect.width + 1));
  const y = Math.floor(Math.random() * (boxRect.height + 1));

  $bug.style.left = x + 'px';
  $bug.style.top = y + 'px';

  plusPoint();
}

function init() {
  $bug.addEventListener('click', randomPosition);
  $box.addEventListener('click', minusPoint);
}

init();
