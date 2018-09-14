function gugudan(num) {
  // for (var i = 2; i <= 9; i++) {
    console.log(num + '단');
    for (var j = 1; j <= 9; j++) {
      console.log(num + '*' + j + '=' + num * j);
    }
  // }
}

for (var i = 2; i <= 9; i++) {
  gugudan(i);
}

alert('good');