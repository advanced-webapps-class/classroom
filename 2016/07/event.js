

var cEvent = {
  add: function(type,func){

    jsonEvent.callback[type].push(func);
  },
  callback: [],
  fire: function(type){

    for(var i=0; i < jsonEvent.callback.length; i++){
      jsonEvent.callback[type][i]();
    }

  }
};




cEvent.add('loadedJson', function(){
  console.log('loaded json data!');
})



cEvent.fire('loadedJson');
