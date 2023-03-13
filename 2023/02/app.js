// 변수선언
//

// number
var count = 5;
console.log(count);
// string
var count = "5";

var nick = "AJ";
var nick = "AJ";

var isMan = true;

var log = function (str) {
  console.log(str);
};

log(nick);

var image = { alt: "test" };

image.width = 100;
image.height = 100;

console.log(image);
console.log(image.width);
console.log(image["width"]);

var image = ["1.jpg", "2.jpg"];
console.log(image, image.length);

image[0] = "3.jpg";
image[3] = "4.jpg";
console.log(image);

var nick = "undefined";
var title = -1;
var isMan = true; // true, false, null

var a;
console.log(a, nick);

var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
