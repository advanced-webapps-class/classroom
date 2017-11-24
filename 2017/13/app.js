

$('#read').on('click', function(event){
  console.log('read');
  
  $.get('http://localhost:3000/posts', function(data){
    
    console.log(data);
  })
});