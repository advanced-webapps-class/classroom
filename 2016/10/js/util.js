


(function(app) {

  app.util = {
    uniqId: function() {
      return new Date().getTime();
    },
    storage : {
      load: function () {
        console.log('storage.load()');
        return JSON.parse(localStorage.getItem(app.storageKey) || "[]");
      },
      save: function (event, data) {
        console.log('storage.save()');
        localStorage.setItem(app.storageKey, JSON.stringify(data));

      }
    }
  };


  app.$wrap.on('addCollection', app.util.storage.save);
  app.$wrap.on('removeCollection', app.util.storage.save);

})(Todo);

