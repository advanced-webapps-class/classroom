const $box = document.getElementById('box');

console.log($box.offsetTop);

let offset = { x: 0, y: 0 };
let isDown = false;

$box.addEventListener('mousedown', (event) => {
  isDown = true;
  // console.log($box.offsetLeft);
  console.log('mousedown');
  offset.x = $box.offsetLeft - event.clientX;
  offset.y = $box.offsetTop - event.clientY;
  // offset.x = event.clientX;
  // offset.y = event.clientY;
});

$box.addEventListener('mouseup', (event) => {
  isDown = false;
  console.log('mouseup');
});

document.body.addEventListener('mousemove', (event) => {
  console.log('mousemove');
  if (!isDown) return;
  // console.log(event.clientX, event.clientY);

  $box.style.left = event.clientX + offset.x;
  $box.style.top = event.clientY + offset.y;

  // $box.style.left = event.clientX;
  // $box.style.top = event.clientY;
});
