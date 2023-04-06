const $board = document.getElementById('board');
const WHITE_COLOR = 'white';
const BLACK_COLOR = 'black';
let $prevTarget = '';

const createBoard = color => `<div class="${color}"></div>`;

const createRow = (count = 4, startColor = 'white') => {
  let row = '';
  for (let i = 0; i < count; i++) {
    let color = startColor;
    if (i % 2 == 0) {
      color = startColor === WHITE_COLOR ? BLACK_COLOR : WHITE_COLOR;
    }
    row += createBoard(color);
  }
  return row;
};

const createChessBoard = (count = 4) => {
  let board = '';
  for (let i = 0; i < count; i++) {
    const startColor = i % 2 === 0 ? WHITE_COLOR : BLACK_COLOR;
    board += createRow(4, startColor);
  }
  return board;
};

const selectBoard = event => {
  const $target = event.target;
  if ($target === $prevTarget) return;
  $target.classList.add('red');
  $prevTarget && $prevTarget.classList.remove('red');
  $prevTarget = $target;
};

const init = () => {
  $board.addEventListener('click', selectBoard);
  $board.innerHTML = createChessBoard();
};

init();
