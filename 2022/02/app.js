// /**
//  * 02주차 실습
//  *
//  *
//  */
// var name = 'aj';
// // name = 111;
// // 이름을 찍는다
// console.log(name);

// var isMan = 'true';
// var isMan1 = true;
// console.log(isMan);
// console.log(isMan1);

// function log(str) {
//   console.log(str);
// }

// log('hello');

// // object

// var img = {};
// img.width = 100;
// img.height = 200;
// console.log(img);

// // 배열
// var arr = [1, 2, 3, 4, 5];
// console.log(arr);

// // 연산자
// console.log(1 + 1);
// console.log(name + ' hello');

// var me = {
//   age: 11,
//   name: 'aj',
//   isMan: true,
//   sayHello: function () {
//     console.log('hello');
//   },
// };

// me.sayHello();

// var arr = [1, 2, 3, 4, 5];
// // console.log(arr.length);

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// var article = {
//   title: '제목1',
//   url: 'http://naver.com',
// };

// var articles = [article];
// console.log(articles);

//create
var todos = ['운동'];

var todo = '게임';
todos.push(todo);

// console.log(todos);

todos.forEach(function (todo) {
  console.log(todo);
});
// update
var updateTodo = '게임';
var updateIndex = todos.findIndex(function (todo) {
  return todo === updateTodo;
});
console.log(updateIndex);
todos[updateIndex] = '공부';
console.log(todos);

// delete

var deleteTodo = '공부';

var newTodos = todos.filter(function (todo) {
  return todo !== deleteTodo;
});

console.log(newTodos);
