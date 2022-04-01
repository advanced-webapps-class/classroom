var $wrap = document.querySelector('.wrap');
var str = '';
var className = '';
var isWhite = false;
var selectedDom = null;

// 마크업을 코드로 찍어주기
for (var i = 0; i < 4; i++) {
  for (var j = 0; j < 4; j++) {
    if (isWhite) {
      className = 'white';
    } else {
      className = 'black';
    }

    str += '<div class="' + className + '"></div>';

    //한번씩 변경
    isWhite = !isWhite;
  }

  isWhite = !isWhite;
}

$wrap.innerHTML = str;

// DOM에 클릭 이벤트 할당

var boards = document.querySelectorAll('.wrap > div');

function selectBoard(event) {
  console.log('selected');
  var board = event.currentTarget;
  // console.log(board);

  if (selectedDom) {
    selectedDom.className = selectedDom.className.replace(' select', '');
  }

  board.className += ' select';
  selectedDom = board;
}

for (var i = 0; i < boards.length; i++) {
  boards[i].addEventListener('click', selectBoard);
}
