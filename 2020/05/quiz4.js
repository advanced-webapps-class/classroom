var box = document.getElementById('box');

boxDrag(box);

function boxDrag(ele) {
  var x1 = 0,
    x2 = 0,
    y1 = 0,
    y2 = 0;

  ele.addEventListener('mousedown', boxDown);

  function boxDown(e) {
    x1 = e.clientX;
    y1 = e.clientY;
    document.addEventListener('mousemove', boxMove);
    document.addEventListener('mouseup', boxUp);
  }

  function boxMove(e) {
    x2 = x1 - e.clientX;
    y2 = y1 - e.clientY;
    x1 = e.clientX;
    y1 = e.clientY;
    ele.style.left = ele.offsetLeft - x2 + 'px';
    ele.style.top = ele.offsetTop - y2 + 'px';
  }

  function boxUp() {
    document.removeEventListener('mouseup', boxUp);
    document.removeEventListener('mousemove', boxMove);
  }
}
