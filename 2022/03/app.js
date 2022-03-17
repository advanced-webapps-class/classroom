console.log('03');
// var isMan = true;

// if ('test') {
//   conole.log('test');
// }

// var a = 1;
// var b = a;
// b = 2;
// console.log(a, b);

// var a = [1];
// var b = a;
// b[0] = [2];
// console.log(a, b);

// var a = { x: 1 };
// var b = a;
// b.x = 2;

// console.log(a, b);

//call by value
// function byValue(count) {
//   count = count + 2;
// }
// var count = 3;

// byValue(count);
// console.log(count); //3

//call by reference
// function byReference(count) {
//   count.push('2');
// }
// var count = ['1'];
// byReference(count);
// console.log(count); // ["1","2"]

// var isMan = true;
// var gender = '';
// if (isMan) {
//   gender = '남자';
// } else {
//   gender = '여자';
// }

// function log(str) {
//   console.log(str);
// }

// var result = log('hello');

// console.log(result);

// var isDelete = confirm('삭제하시겠습니까?');
// if (isDelete) {
//   // .....
// }

// if (confirm('삭제하시겠습니까?')) {
//   // .....
// }

function test() {
  console.log('test()');
}
// var id = setTimeout(test, 1000);
setInterval(test, 1000);
