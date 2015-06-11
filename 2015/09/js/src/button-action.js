(function(app){


  var BtnAction = {

    newNote: function(event){

      // console.log('newNote')
      var storage = app.util.storage;

      storage.save(event, "");

      $(app).trigger("newNote");

    },
    about: function(){

      console.log('about')
    }

  };

  app.ButtonAction = BtnAction;

})(NoteApp);
