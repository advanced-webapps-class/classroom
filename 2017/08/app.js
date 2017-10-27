// $('div').css('background-color','black');

// $('div').removeClass('blue')

// console.log( $('img').attr('src') );
// console.log( document.querySelector('img').src )

// $('div').html('<h2>div</h2>').addClass('blue')

// console.log( $('input').val())
// console.log( $('div').height()  )
// $('div').height(200)

// console.log($('div').offset())



// $('#btn').click(function(){
// })
$('#btn').on('click',function(){
  $('div').animate({top: 200}, 1000);
})
