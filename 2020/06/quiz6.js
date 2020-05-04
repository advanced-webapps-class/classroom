const $num = document.getElementById('num');
const $btn = document.getElementById('btn');
const $result = document.getElementById('result');

function print() {
  const result = [];
  const num = parseInt($num.value, 10);

  if (isNaN(num)) {
    alert('숫자를 입력하세요');
    return;
  }

  for (let i = 1; i <= 9; i++) {
    result.push(`${num} x ${i} = ${num * i}`);
  }
  $result.innerHTML = result.join('<br>');
}

$btn.addEventListener('click', print);
