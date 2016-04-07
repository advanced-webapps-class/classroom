console.log('openapi.js')


var apikey = '2c5481187fc5fd8012a831b26eb89960';

var q = '제주대';
var apiurl = 'https://apis.daum.net/search/vclip?q='+ q +'&apikey='+apikey+
 '&output=json';


 console.log(apiurl)

 getJSON(apiurl, function(res){
   console.log(res);


 });
