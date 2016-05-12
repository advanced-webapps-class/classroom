
(function(app, $){

  var data = [];

  app.collection = {
    set: function(arr){
      data = arr;
      app.$wrap.trigger("addCollection", [data]);
    },
    toJSON: function() {
      return data;
    },
    add: function (todo) {
      data.push(todo);

      // app.view.render(data);
      app.$wrap.trigger("addCollection", [data]);
    },
    remove: function (id) {

      for (var i = 0; i < data.length; i++) {

        if (data[i].id === id) {
          console.log('find', i)
          //data에서  todo를 지워야해
          data.splice(i, 1);
          break;
        }

      }//end for

      app.$wrap.trigger("removeCollection", [data]);

    }

  };
})(Todo, jQuery);
