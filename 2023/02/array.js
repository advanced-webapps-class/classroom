// var words = ["a", "b", "c"];
// // ["c"]

// console.log(words.pop(), words);

// words.push("d");

// console.log(words);

// console.log(words.join("-"));

// console.log(words);

// var num = [1, 2, 3];

// console.log(words.concat(num));

// console.log(words);

// const words = ["a", "b", "c"];
// const newWords = words.unshift("z");
// console.log(words);

// words[1] = 1;
// console.log(words);

// var words = ["a", "b", "c"];
// console.log(words.splice(0, 1));
// console.log(words);

// var words = ["a", "b", "c"];
// console.log(words.slice(2));
// console.log(words.slice(0, 1));
// console.log(words);

// var words = ["a", "b", "c"];
// words.forEach(function (word, i, words) {
//   console.log(word, i, words);
// });

// var words = ["a", "b", "c"];
// var newWords = words.map(function (word) {
//   return word + " ok";
// });
// console.log(newWords);

var nums = [1, 2, 3, 4, 5];
// var newNums = [];

// for (var i = 0; i < nums.length; i++) {
//   if (nums[i] >= 3) {
//     newNums.push(nums[i]);
//   }
// }

// console.log(newNums);

var newNums = nums
  .filter(function (num) {
    return num >= 3;
  })
  .map(function (num) {
    return num + 10;
  });

console.log(newNums);
