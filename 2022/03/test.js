var sum = 0;

while (true) {
  var input = prompt('숫자를 입력하세요');
  if (input !== null) {
    input = parseInt(input, 10);
    sum += input;
  } else {
    alert('숫자의 합 ' + sum);
    break;
  }
}
