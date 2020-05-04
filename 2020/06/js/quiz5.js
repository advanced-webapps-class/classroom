let offset = [0, 0];
let dragDom = null;

function startDragDom(el) {
  el.addEventListener('mousedown', function (e) {
    dragDom = el;
    offset = [dragDom.offsetLeft - e.clientX, dragDom.offsetTop - e.clientY];
  });
}

function addEvent() {
  document.addEventListener('mouseup', function () {
    dragDom = null;
  });
  document.addEventListener('mousemove', function (e) {
    event.preventDefault();
    if (dragDom) {
      dragDom.style.left = e.clientX + offset[0] + 'px';
      dragDom.style.top = e.clientY + offset[1] + 'px';
    }
  });
}

startDragDom(document.querySelectorAll('.box')[0]);
startDragDom(document.querySelectorAll('.box1')[0]);
addEvent();
