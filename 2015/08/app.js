

var cards = [1,2,3,4,5,1,2,3,4,5];


function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}


console.log(shuffle(cards))
