console.log('app.js');
//구구단

var str = '';
var wrap = document.getElementById('wrap');
var template = document.getElementById('templateString').innerHTML;
var models = [];

for(var i=1; i<=9; i++){
 // models[i] = i;
 models[i] = []; //new Array();
 // str += ("<h2>" + i + "단 시작......</h2>");
 for(var k=1; k<=9; k++){
   models[i][k] = i * k;
  //  str += (i +"x"+ k + "=" + (i * k)) + "<br>";
 }
}

  var html = tmpl(template, {list: models});
  wrap.innerHTML = html;

// console.log(models)
