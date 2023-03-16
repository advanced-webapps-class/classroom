// const a = 'a';
// console.log(a);
// a = '11';
// console.log(a);

// array create
// const todos = ['운동'];
// const todo = '공부';
// todos.push(todo);
// console.log(todos);

// // read
// todos.forEach(function (todo) {
//   console.log(todo);
// });

// update
// const updateTodo = '공부';
// const updateIndex = todos.findIndex(function (todo) {
//   return todo === updateTodo;
// });

// todos[updateIndex] = '게임';
// console.log(todos);

// const newTodos = todos.map(function (todo) {
//   if (todo === updateTodo) {
//     return '게임';
//   }
//   return todo;
// });
// console.log(newTodos);

//

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

// const a = { a: 1, b: 1 };
// a.c = 1;
// console.log(a);

// function test() {
//   console.log('test()');
// }

// var id = setInterval(test, 1000); //1초마다 계속 실행

// clearInterval(id);

// var nick = 'aji'; //전역변수

// function test() {
//   var age = 30; //지역변수
//   console.log(nick, age);
// }

// test();
// console.log(age);

// var name = 'global';
// function test() {
//   console.log(name);
//   var name = 'local';
//   console.log(name);
// }
// test();

// test2();

// function test2() {
//   console.log('test');
// }

let value = undefined;
let count = 0;

while (value !== null) {
  value = window.prompt();
  count += value * 1;
}
console.log(count);
