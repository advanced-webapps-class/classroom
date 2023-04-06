// 체스판의 크기를 상수로 지정한다.
const BOARD_SIZE = 4;

// 체스판을 그리기 위한 HTML 요소를 가져온다.
const board = document.getElementById('board');

// 체스판을 그리기 위한 HTML 문자열을 저장할 변수를 선언한다.
let boardHTML = '';

// 체스판의 행을 반복한다.
for (let row = 0; row < BOARD_SIZE; row++) {
  // 체스판의 열을 반복한다.
  for (let col = 0; col < BOARD_SIZE; col++) {
    // 현재 위치가 검은색 칸인지 흰색 칸인지 판단한다.
    const isBlack = (row + col) % 2 === 0;
    // 현재 위치에 맞는 색상의 칸을 HTML 문자열에 추가한다.
    boardHTML += `<div class="cell ${isBlack ? 'black' : 'white'}"></div>`;
  }
}

// HTML 문자열을 체스판 요소에 할당한다.
board.innerHTML = boardHTML;
