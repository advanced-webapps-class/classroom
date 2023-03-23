const title = 'jeju';
const url =
  'https://daum.net/ \
asd \
asd ' + title;

const url2 = `https://daum.net/${title}
asdf
as
asdf
asd
asd`;

console.log(url, url2);

function sum(x, y = 0) {
  // if (!y) y = 0;
  return x + y;
}

console.log(sum(10));
const result = [1, 2, 3].map(item => item + 1);
console.log(result);

const items = [1, 2, 3, 4];
console.log(...items);

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
const [, y] = [...numbers];

console.log(y);

function func(...param) {
  console.log(param);
}

func(1, 2, 3);

// console.log(sum(...numbers));

const obj = { team: 1, area: 2 };

const team = obj.team;
const area = obj.area;

const { team1, area1 } = obj;

const number = 1;
const obj1 = {
  number,
};
