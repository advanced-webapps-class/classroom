import { setupCounter } from './counter.js';
import Button from './Button.js';

function plus() {
  console.log('plus');
}
const $plusButton = Button({ text: 'plus', onClick: plus });

document.querySelector('#app').innerHTML = `
  <div>
    <h1>ssss!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;
document.querySelector('#app').append($plusButton);

setupCounter(document.querySelector('#counter'));
