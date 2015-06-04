

var cards = [1,2,3,4,5,1,2,3,4,5];

var $board = $('#gameBoard');

//섞기
cards = shuffle(cards);
console.log(cards)

//깔기
var doms = [];
for(var i=0; i < cards.length; i++){

  doms.push(
    '<div class="card" data-value="' + cards[i]+ '">' +
    '<div class=""> '+ cards[i]  +' </div>' +
    '</div>'
  );
}

$board.html(doms.join(''));




//클릭 이벤트 주기
var cardStatus = 'close'; // close, open, ....
var openedValue = 0;

$board.on('click', '.card', function(event){

  //
  var $card = $(event.currentTarget);

  if(cardStatus === 'close'){

    $card.addClass('open');
    openedValue = $card.data('value');
    cardStatus = 'open1';
  }
  else if(cardStatus === "open1"){

    $card.addClass('open');
    cardStatus = 'open2';

    setTimeout(function(){
      $('.card').removeClass('open');
      cardStatus = 'close';

    }, 1000);
  }

});
