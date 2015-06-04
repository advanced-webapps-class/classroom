// fs 모듈 사용
// node fs.js
var fs = require('fs');

fs.writeFile('message.txt', 'Hello Node', function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});
