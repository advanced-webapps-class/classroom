const $bug = document.getElementById('bug');
let life = 10;
let count = 0;
const lifecycle = document.getElementById('life');
let bugCatch = false;
const point = document.getElementById('point');
const box = document.querySelector('.box');

const start = event => {
  event.stopPropagation();
  point.innerHTML = count++;
  bugCatch = true;
};

function random() {
  $bug.style.top = `${Math.floor(Math.random() * (380 - 0) + 0)}px`;
  $bug.style.left = `${Math.floor(Math.random() * (380 - 0) + 0)}px`;
}

function time() {
  if (lifecycle.innerHTML <= 0) {
    alert('Game Over');
  }
  if (bugCatch === false) {
    lifecycle.innerHTML = life--;
    random();
    bugCatch = true;
  } else {
    lifecycle.innerHTML = life;
    random();
    bugCatch = false;
  }
}

function init() {
  $bug.addEventListener('click', start);
  setInterval(() => time(), 1000);
  box.addEventListener('click', event => {
    lifecycle.innerHTML = life--;
  });
}

init();
