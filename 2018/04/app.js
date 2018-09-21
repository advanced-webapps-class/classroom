var wrap = document.querySelector('.wrap');

var str = '';
for(var i=0; i < 16; i++){
  // str = str +  '<div class="b"></div>';
  str +=  '<div class="b"></div>';
}
wrap.innerHTML = str;