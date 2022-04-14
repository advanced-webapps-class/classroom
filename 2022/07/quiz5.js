// 'use strict';

let $dragEl = null;
let position = 10;
// console.log($box.offsetTop);

let offset = { x: 0, y: 0 };
let isDown = false;

document.body.addEventListener('mousemove', (event) => {
  console.log('mousemove');
  if (!isDown) return;
  // console.log(event.clientX, event.clientY);

  $dragEl.style.left = event.clientX + offset.x;
  $dragEl.style.top = event.clientY + offset.y;

  // $box.style.left = event.clientX;
  // $box.style.top = event.clientY;
});
document.addEventListener('mouseup', (event) => {
  isDown = false;
  console.log('mouseup');
});

function startDrag(el) {
  el.addEventListener('mousedown', (event) => {
    $dragEl = el;
    isDown = true;
    // console.log($box.offsetLeft);
    console.log('mousedown');

    offset.x = $dragEl.offsetLeft - event.clientX;
    offset.y = $dragEl.offsetTop - event.clientY;
    $dragEl.style.zIndex = position++;
    // offset.x = event.clientX;
    // offset.y = event.clientY;
  });
}
// -----------------

const $box1 = document.querySelector('.box1');
const $box2 = document.querySelector('.box2');

startDrag($box1);
startDrag($box2);
