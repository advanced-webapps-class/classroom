

function addTodo(event) {

  console.log('todoStringField keyup!');


  var $field = $(event.currentTarget);
  var fieldValue = $field.val();

  if (event.keyCode !== 13 || fieldValue === "") {

    console.log('event stop')
    return false;
    // event.stopPropagation(); //이벤트 전파중지
    // return;
  }


  //엔터키가 아니면 함수 중지
  // if (event.keyCode !== 13 || todoStringField.value === "") {
  //   event.stopPropagation(); //이벤트 전파중지
  //   return;
  // }
  //

  // var newTodo = fieldValue;

  $field.val('');
  console.log('new​ todo:', fieldValue)


  // var newTodo = todoStringField.value;
  // todoStringField.value = "";
  //
  // console.log('새로운 todo:', newTodo);
  //

  //TODO. 나중에 밖으로 빼기
  var todoTemplateHtml = $('#todoTemplate').html();
  var $listDom = $('#todoList');

  $listDom.append( tmpl(todoTemplateHtml, {todo: fieldValue}) );

  // listDom.innerHTML += tmpl(todoTemplateHtml, {todo: newTodo});


  saveData($listDom.html());
}


function checkDelete(event) {

  //if(!confirm('정말 삭제하나용? ')){
  //  return;
  //}


  if(event.target.className !== 'delete') {
    return;
  }
  var deleteBtn = event.target;

  //버튼의 상위엘리먼트 <li> 제거
  deleteBtn.parentElement.remove();

  saveData();
}

function loadData() {
  console.log('loadData()');
  return localStorage.getItem('todoHtml');
}
function saveData(html) {
  console.log('saveData()');
  localStorage.setItem('todoHtml', html);
}
