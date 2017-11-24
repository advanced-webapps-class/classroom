

$('#read').on('click', function(event){
  console.log('read');
  
  $.get('http://localhost:3000/posts', function(data){    
    console.log(data);
  })
});

$('#create').on('click', function(event){
  console.log('create');
  
  $.post('http://localhost:3000/posts', {title: '하하하하'},  function(data){    
    console.log(data);
  })
});

$('#remove').on('click', function(event){
  console.log('remove');
  
  $.ajax({
    url: 'http://localhost:3000/posts/1',
    method: 'DELETE',
    complete: function(data){
        console.log(data);

    }
    
  })
});


$('#update').on('click', function(event){
  console.log('update');
  
  // $.put('http://localhost:3000/posts/1', {title: '수정입니다' + (new Date().getTime() ) },  function(data){    
  //   console.log(data);
  // })
  
  $.ajax({
    url: 'http://localhost:3000/posts/1',
    method: 'PUT',
    data: {title: '수정입니다' + (new Date().getTime() ) },
    complete: function(data){
        console.log(data);

    }
    
  })
  
});