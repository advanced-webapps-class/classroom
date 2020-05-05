const offset = { x: 0, y: 0 };
let isDown = false;
let dragDom = null;

function startDragDom(el) {
  el.addEventListener('mousedown', (event) => {
    isDown = true;
    dragDom = el;
    // console.log('mousedown');
    offset.x = el.offsetLeft - event.clientX;
    offset.y = el.offsetTop - event.clientY;
  });
}

function addEvent() {
  document.addEventListener('mouseup', () => {
    // console.log('mouseup');
    isDown = false;
  });

  document.addEventListener('mousemove', (event) => {
    if (!isDown) return;
    // console.log('mousemove');
    // console.log(event.clientX, event.clientY);

    dragDom.style.left = `${event.clientX + offset.x}px`;
    dragDom.style.top = `${event.clientY + offset.y}px`;
  });
}

addEvent();

startDragDom(document.querySelector('.box'));
startDragDom(document.querySelector('.box1'));
// const $box = document.querySelector('.box');
