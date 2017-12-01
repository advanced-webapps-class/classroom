function fullScreen(){
  if (screenfull.enabled) {
  	screenfull.request( document.querySelector('img') );
  }
  
}


function getGeo(){
  
  navigator.geolocation.getCurrentPosition(function(position) {
    
    document.getElementById('log').innerHTML =
     'http://map.daum.net/link/map/여기,'+position.coords.latitude+','+position.coords.longitude;
    //console.log(position.coords.latitude, position.coords.longitude);
  });
  
}

document.getElementById('fullBtn').addEventListener('click', fullScreen);

document.getElementById('geoBtn').addEventListener('click', getGeo);


