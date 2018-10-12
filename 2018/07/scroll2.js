var $window = $(window);
var $up = $('#up')

function checkScroll(event) {
  var scrollTop = $window.scrollTop();
  var 업버튼이_보여질_포지션 = 100;

  if(scrollTop > 업버튼이_보여질_포지션) {
    $up.fadeIn();
  }
}
function goTop(){
  // $window.scrollTop(0); 
  $( 'html, body' ).animate( { scrollTop : 0 }, 400 )
}

$window.on('scroll', checkScroll);
$up.click(goTop);