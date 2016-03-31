console.log('app.js');
//구구단

var str = '';
var wrap = document.getElementById('wrap');

for(var i=1; i<=9; i++){

 str += ("<h2>" + i + "단 시작......</h2>");

 for(var k=1; k<=9; k++){

   str += (i +"x"+ k + "=" + (i * k)) + "<br>";
 }

}

wrap.innerHTML = str;
