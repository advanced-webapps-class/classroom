// var div = document.createElement('div');
// div.style.border = "1px solid red";
// div.innerHTML = "hello!!";
// document.body.appendChild(div);


// document.body.innerHTML = '<div style="border:1px solid red">111</div>';



// window.onclick=function(){
//     alert("load");
// };

// window.addEventListener('load', function(){
//     alert("load1");
// });
//
// window.addEventListener('load', function(){
//     alert("load2");
// });

// var head = document.querySelectorAll('#head');
// head[0].addEventListener('click', function(event){
//   debugger;
//   console.log(1)
//
// });


var clickCount = 0;
function popup(event){
    console.log(++clickCount);
    console.log(arguments, this ,event ,event.type,event.currentTarget);
}
document.body.addEventListener('click', popup);
