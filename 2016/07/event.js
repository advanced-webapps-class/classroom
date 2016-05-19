//커스텀 이벤트 예제


// 문이열리고
// 학생은 앉고
// 선생님은 출석이...
// ㅁㅇㄹㅁㄴㅇㄹ
// ㅇ



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


//학생
cEvent.add('문이열렸다', function(){
  // console.log('');
  sitdown();
})

//교수
cEvent.add('문이열렸다', function(){
  call();
})


//
cEvent.fire('문이열렸다');
