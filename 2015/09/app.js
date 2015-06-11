(function($){


  var $memo = $('#memo');
  var $menu = $('.header .menu');
  var storageKey = "note";


  var util = {
      storage : {
        load: function () {
          console.log('storage.load()');
          return localStorage.getItem(storageKey);
          // return JSON.parse(localStorage.getItem(storageKey) || "[]");
        },
        save: function (event, data) {
          console.log('storage.save()');
          // localStorage.setItem(storageKey, JSON.stringify(data));
          localStorage.setItem(storageKey, data);
        }
      }
    };

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
