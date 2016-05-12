//start...

//개발자도구에서 메세지확인
// console.log('todos.js');


(function($, global){

  var $todoStringField = $('#todoString');
  var $listDom = $('#todoList');


  // todoStringField.addEventListener('keyup', addTodo);
  $todoStringField.on('keyup', addTodo );


  // //삭제버튼 이벤트 잡기 위해 상위에서 이벤트 listen 하기
  // listDom.addEventListener('click', checkDelete);

  $listDom.on('click', '.delete', function(event){

    console.log('delete')

    var $deleteBtn = $(event.target);

    $deleteBtn.parent().remove();


    saveData( $listDom.html() );

  });

  // //처음 로딩시에 기존에 저장된 데이터 가져와서 보여주기
  // listDom.innerHTML = loadData();
  $listDom.html( loadData() );


})(jQuery, window);
