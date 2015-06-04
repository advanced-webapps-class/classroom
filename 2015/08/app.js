

var cards = [1,2,3,4,5,1,2,3,4,5];

var $board = $('#gameBoard');

//섞기
cards = shuffle(cards);
console.log(cards)

//깔기
var doms = [];
for(var i=0; i < cards.length; i++){

  doms.push(
    '<div class="card" data-value="' + cards[i]+ '">'
    + cards[i] + '</div>'
  );
}

$board.html(doms.join(''));


//클릭 이벤트 주기
var cardStatus = 'closed'; // close, open, ....

$board.on('click', '.card', function(event){

  //
  var $card = $(event.currentTarget);

  $card.addClass('open');

});
