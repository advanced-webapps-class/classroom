addRed();
addBtn();
deleteBtn();
textBtn();
resetBtn();
toggleBtn();
imageBtn();

function addRed() {
  var add_red = document.querySelector('.add-red');
  add_red.addEventListener('click', function () {
    var box = document.querySelectorAll('.box');
    for (var i = 0; i < box.length; i++) {
      box[i].classList.add('red');
    }
  });
}

function addBtn() {
  var add_btn = document.querySelector('.add-btn');
  add_btn.addEventListener('click', function () {
    var div = document.createElement('div');
    div.classList.add('box');
    document.body.appendChild(div);
  });
}

function deleteBtn() {
  var delete_btn = document.querySelector('.delete-btn');
  delete_btn.addEventListener('click', function () {
    var box = document.querySelector('.box');
    console.log(box);
    box.remove();
  });
}

function textBtn() {
  var text_btn = document.querySelector('.text-btn');
  text_btn.addEventListener('click', function () {
    var box = document.querySelectorAll('.box');
    var txt = document.querySelector('.txt');
    for (var i = 0; i < box.length; i++) {
      box[i].innerHTML = txt.value;
    }
  });
}

function resetBtn() {
  var reset_btn = document.querySelector('.reset-btn');
  reset_btn.addEventListener('click', function () {
    var box = document.querySelectorAll('.box');
    for (var i = 0; i < box.length; i++) {
      box[i].remove();
    }
  });
}

function toggleBtn() {
  var toggle_btn = document.querySelector('.toggle-btn');
  toggle_btn.addEventListener('click', function () {
    var box = document.querySelectorAll('.box');
    console.log(box[0].style.visibility);
    if (box[0].style.visibility == 'visible')
      for (var i = 0; i < box.length; i++) box[i].style.visibility = 'hidden';
    else
      for (var i = 0; i < box.length; i++) box[i].style.visibility = 'visible';
  });
}

function imageBtn() {
  image_btn = document.querySelector('.image-btn');
  image_btn.addEventListener('click', function () {
    console.log('처리 중');
    var box = document.querySelector('.box');
    var src = 'https://i.imgur.com/69NjYBH.png';
    var str = '<img src=' + src + "alt=''>";
    box.innerHTML = str;
  });
}
