(function(app){

  app.util = {
      storage : {
        load: function () {
          console.log('storage.load()');
          return localStorage.getItem(app.storageKey);
          // return JSON.parse(localStorage.getItem(storageKey) || "[]");
        },
        save: function (event, data) {
          console.log('storage.save()');
          // localStorage.setItem(storageKey, JSON.stringify(data));
          localStorage.setItem(app.storageKey, data);
        }
      }
    };

})(NoteApp);
