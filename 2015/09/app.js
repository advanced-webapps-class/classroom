(function($){


  var $memo = $('#memo');
  var $menu = $('.header .menu');
  var storageKey = "note";




  var BtnAction = {

    newNote: function(){

      console.log('newNote')
    },
    about: function(){

      console.log('about')
    }

  };

  $memo.on('keyup', function(event){

    // console.log(event.keyCode)
    var value = $memo.val();
    // console.log(value)
    util.storage.save(event, value);

  });


  $menu.on('click', 'a', function(event){

    var $btn = $(event.currentTarget);
    var action = $btn.data('action');

    BtnAction[action]();

    return false;
  });




  $memo.val ( util.storage.load() );



})(jQuery);
