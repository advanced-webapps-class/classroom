// var btn = document.getElementById('btn');

// var btn = document.querySelector('#btn');
// console.log(btn);

// function click(event) {

//   console.log('click', event);
//   window.open('http://m.daum.net' , '' , 'width=500, height=500')
// }

// btn.addEventListener('click', click);

var clickCount = 0;
function popup(event){
    console.log(++clickCount);
    console.log(arguments, this ,event ,event.type,event.currentTarget);
}
document.body.addEventListener('click', popup);

document.body.addEventListener('click', function(){
    console.log("click");
});
