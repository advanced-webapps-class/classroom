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
$('#login').on('click',function(event){


  window.open($(event.currentTarget).attr('href'), 'login', 'width=400,height=400')
  // event.stopPropagation();
  // event.preventDefault();
  return false;
})
$('div').on('click',function(){
  console.log(1)
})
