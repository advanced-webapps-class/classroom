(function($, app){


  var $memo = $('#memo');
  var $menu = $('.header .menu');
  var storage = app.util.storage;
  var $summernote = $('#summernote');


  bindEvent();

  // app.htmlEditor.init();

  $summernote.summernote({
    height: 300,
    onInit: loadData,
    onKeyup: saveData
  });


  function saveData(event){

    var value = $summernote.code();
    // console.log(html);
    storage.save(event, value);
  }
  function bindEvent(){

    // $memo.on('keyup', function(event){
    //
    //   // console.log(event.keyCode)
    //   var value = $memo.val();
    //   // console.log(value)
    //   storage.save(event, value);
    //
    // });


    $menu.on('click', 'a', function(event){

      var $btn = $(event.currentTarget);
      var action = $btn.data('action');

      app.ButtonAction[action]();

      return false;
    });

    $(app).on('newNote', function(){
      $memo.val('');
    });

  }


  function loadData(){
    var html = storage.load();
    $summernote.code(html);
  }


})(jQuery, NoteApp);
