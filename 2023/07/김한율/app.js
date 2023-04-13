const target = document.querySelector('.target');
const box = document.querySelector('.box');
const point = document.querySelector('#point');
const life = document.querySelector('#life');
const gameOver = document.querySelector('.game-over');

let score = 0;
let lifeCount = 10;

function moveTarget() {
  const randomX = Math.floor(
    Math.random() * (box.offsetWidth - target.offsetWidth)
  );
  const randomY = Math.floor(
    Math.random() * (box.offsetHeight - target.offsetHeight)
  );
  target.style.top = randomY + 'px';
  target.style.left = randomX + 'px';
}

function startGame() {
  target.addEventListener('click', () => {
    score += 1;
    point.textContent = score;
    moveTarget();
  });

  moveTarget();
}

box.addEventListener('click', () => {
  lifeCount -= 1;
  life.textContent = lifeCount;

  if (lifeCount === 0) {
    gameOver.style.display = 'block';
    box.style.display = 'none';
  }
});

startGame();
