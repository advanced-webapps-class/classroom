import Button from './Button.js';
import Wrapper from './Wrapper.js';

const $root = document.querySelector('#root');

let count = 0;
function plus() {
  console.log('plus');
  // ++count;
  // document.querySelector('.count').textContent = ++count;
  setCount(++count);
}

function minus() {
  console.log('minus');
  // --count;
  // document.querySelector('.count').textContent = --count;
  setCount(--count);
}

const $plusButton = Button({ text: 'plus', onClick: plus });
const $minusButton = Button({ text: 'minus', onClick: minus });
const { $wrapper: $countWrapper, setText: setCount } = Wrapper({
  text: 0,
  className: 'count',
});

$root.append($countWrapper, $plusButton, $minusButton);
