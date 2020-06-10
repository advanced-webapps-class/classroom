import { saveData } from './data-manager';

const $result = document.querySelector('#result');

function render(data) {
  saveData(data);
  const html = data.map((todo, index) => {
    return `<li data-index="${index}">
  <button class="delete">×</button>
  <input type="checkbox" class="toggle-checked" ${
    todo.isDone ? 'checked' : ''
  }/>
  <span class="text">${todo.text}</span>
</li>`;
  });

  $result.innerHTML = `<ul>${html.join('')}</ul>`;
}

export { render };
