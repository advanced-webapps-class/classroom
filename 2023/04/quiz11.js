// 11.배열값 나누기
const items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
const pageSize = 3;

const pad = '---';
const result = [];

items.forEach((item, index) => {
  // console.log(`${item},`);
  const isPagePad = index % pageSize === 0 && index > 0;

  if (isPagePad) {
    result.push(pad);
  }
  result.push(item);
});

const str = result.join(',').replace(/,---,/g, '---');

console.log(str);
// 출력: a,b,c,d,e,f,g,h,i,j
// 출력: a,b,c---d,e,f---g,h,i---j
