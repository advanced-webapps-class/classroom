const bug = document.getElementById('bug');
const box = document.querySelector('.box');
const point = document.getElementById('point');
const life = document.getElementById('life');
let score = 0;
let remainingLives = 10;
let bugInterval;

function moveBug() {
  const x = Math.floor(Math.random() * (box.clientWidth - bug.clientWidth));
  const y = Math.floor(Math.random() * (box.clientHeight - bug.clientHeight));
  bug.style.left = `${x}px`;
  bug.style.top = `${y}px`;
}

function updateScore() {
  score++;
  point.textContent = score;
}

function updateLife() {
  remainingLives--;
  life.textContent = remainingLives;
  if (remainingLives === 0) {
    clearInterval(bugInterval);
    alert('Game over!');
  }
}

function handleBugClick() {
  remainingLives++;
  updateScore();
  moveBug();
}

function handleBoxClick() {
  updateLife();
}

bug.addEventListener('click', handleBugClick);
box.addEventListener('click', handleBoxClick);

moveBug();
bugInterval = setInterval(moveBug, 1000);
