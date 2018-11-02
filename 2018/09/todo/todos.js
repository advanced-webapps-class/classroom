var input = document.querySelector('#memo');
var form = document.querySelector('.new-task');
var todoList = document.querySelector('#todo-list')

function addTodo(event) {   
    let todo = input.value;
    if(todo.trim() !== '') {
        console.log(todo);
        insertTodo(todo);
        input.value = "";
    }
    

    // 해당 url로 넘어가지 않게 동작하기
    // return false;
    // 혹은 동작하지 않게 하기
    event.preventDefault();
}
function doneTodo(event) {
    let parent = event.target.parentNode;
    let todoText = parent.querySelector('span.text');
    if(event.target.checked) {
        todoText.classList.add('done');
    }
    else {
        todoText.classList.remove('done');
    }
        
}

function deleteTodo(event) {
  debugger
    todoList.removeChild(event.target.parentNode);
}

function insertTodo(todo) {
    let todoLi = document.createElement('li');
    todoLi.innerHTML = `
        <button class="delete">x</button>
        <input type="checkbox" class="toggle-checked">
        <span class="text">${todo}</span>
    `
    todoLi.querySelector('.delete').addEventListener('click', deleteTodo);
    console.log(todoLi.querySelector('.toggle-checked'));
    todoLi.querySelector('.toggle-checked').addEventListener('click', doneTodo);
    todoList.appendChild(todoLi);
    // var todoBlock = `
    //     <li>
    //         <button class="delete">x</button>
    //         <input type="checkbox" class="toggle-checked">
    //         <span class="text">${todo}</span>
    //     </li>
    // `
}

// input.addEventListener('keydown', addTodo);
form.addEventListener('submit', addTodo);