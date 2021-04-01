// 1부터 100까지 출력하는 프로그램
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// 홀수 출력하기
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 1) {
    // 홀수
    console.log(i);
  }
}

// 구구단 출력
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j} 입니다.`);
  }
}

// 합
var num = 0;
var sum = 0;
while ((num = prompt('숫자를 입력하세요')) !== '') {
  sum += parseInt(num);
}
alert(`합은 ${sum}`);
