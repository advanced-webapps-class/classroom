


(function(app) {


function remove(id){
  $.ajax({
  url: 'http://localhost:3000/todos/' + id,
  method: 'DELETE',
  success: function(result){
    console.log('Delete:', result);
  }
  });
}
function save(model){
  $.ajax({
  url: 'http://localhost:3000/todos',
  method: 'POST',
  data: model,
  success: function(result){
    console.log('Save:', result);
  }
  });
}

  app.util = {
    uniqId: function() {
      return new Date().getTime();
    },
    storage : {
      load: function (callback) {
        console.log('storage.load()');
        // return JSON.parse(localStorage.getItem(app.storageKey) || "[]");
        $.get('http://localhost:3000/todos', function(result){
          callback(result);
        });

      },
      save: function (event, data) {
        console.log('storage.save()');

// debugger;
        // for(var i=0; i<data.length; i++){
        //   remove(data.id);
        // }
        // localStorage.setItem(app.storageKey, JSON.stringify(data));

      },
      btnSave: function(){

        var data = app.collection.toJSON();
        console.log('save data:', data);
        // for(var i=0; i<data.length; i++){
        //   remove(data[i].id);
        // }

        for(var i=0; i<data.length; i++){
          save(data);
        }

      }

    }
  };


  app.$wrap.on('addCollection', app.util.storage.save);
  app.$wrap.on('removeCollection', app.util.storage.save);

})(Todo);
