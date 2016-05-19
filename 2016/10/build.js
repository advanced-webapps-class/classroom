// var prettyBytes = require('pretty-bytes');
//
// console.log(prettyBytes(100));
// console.log(prettyBytes(1337));

// var fs = require('fs');
//
// var str = ;
// fs.readFile('./js/config.js', 'utf-8',  function(err, data) {
//   if (err) throw err;
//   // console.log(typeof data);
//   // str.push( data.toString())
//   // console.log(data);
// });
// // fs.readFile('./js/util.js', 'utf-8', (err, data) => {
// //   if (err) throw err;
// //   str += data;
// //   // console.log(data);
// // });
// //
// // fs.readFile('./js/main.js', 'utf-8', (err, data) => {
// //   if (err) throw err;
// //   str += data;
// //   // console.log(data);
// // });
//
// // console.log(str)

// var concat = require('concat-files');
//
// concat([
//   './js/config.js',
//   './js/main.js'
// ], './dist/app.js', function() {
//   console.log('concat done!');
// });
var UglifyJS = require("uglify-js");
var fs = require("fs");

// <!-- <script src="js/config.js"></script>
// <script src="js/util.js"></script>
// <script src="js/TodoModel.js"></script>
// <script src="js/TodoCollection.js"></script>
// <script src="js/TodoView.js"></script>
// <script src="js/tmpl.js"></script>
// <script src="js/main.js"></script> -->
var result = UglifyJS.minify([
  "./js/config.js",
   "./js/util.js",
   "./js/TodoModel.js",
   "./js/TodoCollection.js",
   "./js/TodoView.js",
   "./js/tmpl.js",
  "./js/main.js" ]);
// console.log(result.code);
fs.writeFile('./dist/app.min.js', result.code, function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});
