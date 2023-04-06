//
let x = 0;
let y = 0;
let offset = { x: 0, y: 0 };
let isDown = false;
let $dragEl = null;

const startDrag = event => {
  console.log('mousedown');
  // console.log(event.clientX, event.clientY);
  // console.log(x, y);

  $dragEl = event.target;

  offset.x = $dragEl.offsetLeft - event.clientX;
  offset.y = $dragEl.offsetTop - event.clientY;
  isDown = true;
};

const stopDrag = event => {
  // console.log('mouseup');
  isDown = false;
};

const drag = event => {
  // console.log('mousemove', event.clientX, event.clientY);
  if (!isDown) return;

  x = event.clientX;
  y = event.clientY;

  $dragEl.style.left = x + offset.x + 'px';
  $dragEl.style.top = y + offset.y + 'px';
};

function addEvent() {
  document.body.addEventListener('mouseup', stopDrag);
  document.body.addEventListener('mousemove', drag);
}

function init() {
  addEvent();

  // $box.addEventListener('mousedown', startDrag);
  // $box2.addEventListener('mousedown', startDrag);

  document.querySelectorAll('.drag').forEach($box => {
    $box.addEventListener('mousedown', startDrag);
  });
}

init();
