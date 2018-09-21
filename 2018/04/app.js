var wrap = document.querySelector('.wrap');
var str = '';

for(let i = 1; i <= 4; i++) {
  for(let j = 1; j <= 4; j++) {
      // let block = document.createElement('div');
      // block.className = (i + j) % 2 == 1 ? 'black' : 'white';
      // wrap.appendChild(block);
      str += `<div class='${(i + j) % 2 == 1 ? 'b' : 'w'}'></div>`  
  }
}


wrap.innerHTML = str;