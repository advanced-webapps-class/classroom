
// list data
var list = ['a','b','c','d','e','f','g','h'];

//dom
var $debug = document.getElementById('debug');
var $nextBtn = document.getElementById('next');

var str = '';

for(var i=0; i < 3; i++){

  str += list[i] + ',';
}

$debug.innerHTML = str;




next.addEventListener('click', nextGroup);



function nextGroup(event){

  console.log('nextGroup');



}
