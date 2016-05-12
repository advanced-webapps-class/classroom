
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

function printCards(){
  cards.forEach(function(card){
    $wrap.append('<div class="card close" num="'+card+'">\
    <div class="front">  </div> \
    <div class="back">'+ card +'</div></div>');
  });
}

function addEvent(){

  $wrap.on('click', '.card', function(event){


debugger
    var $target = $(event.currentTarget);
    var num = $target.attr('num');

    console.log('click card!', num)



});
}

var cards = [1,2,3,4, 1,2,3,4];
var $wrap = $('.wrap');

//init
shuffle(cards);
console.log(cards)
printCards();
addEvent();
