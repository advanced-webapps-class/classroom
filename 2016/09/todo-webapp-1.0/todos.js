//start...

//개발자도구에서 메세지확인
console.log('todos.js');



// id가 todoString 인 element 가져오기
var todoStringField = getDom('todoString');
var todoTemplateHtml = getDom('todoTemplate').innerHTML;
var listDom = getDom('todoList');

console.log(todoStringField);


todoStringField.addEventListener('keyup', addTodo);

//삭제버튼 이벤트 잡기 위해 상위에서 이벤트 listen 하기
listDom.addEventListener('click', checkDelete);

//처음 로딩시에 기존에 저장된 데이터 가져와서 보여주기
listDom.innerHTML = loadData();
