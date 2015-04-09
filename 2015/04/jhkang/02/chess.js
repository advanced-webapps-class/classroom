/**
 * Created by jhkang on 3/26/15.
 */

function appendTile(line, color) {
    var tile = document.createElement("div");
    tile.setAttribute("class", "tile "+color);
    tile.setAttribute("default", color);
    line.appendChild(tile);
}

var container = document.getElementById("container");


for(var i = 1; i <= 4; ++i) {
    var line = document.createElement("div");
    line.setAttribute("class", "line");
    container.appendChild(line);

    for(var j = 1; j <= 4; ++j) {
        if(i%2 === 0){
            if(j%2 === 0) appendTile(line, "black");
            else appendTile(line, "white");
        } else{
            if(j%2 === 0) appendTile(line, "white");
            else appendTile(line, "black");
        }
    }
}


var before = null;
document.getElementById("container").addEventListener("click", function(ev) {
    if(before){
        var color = before.getAttribute("default");
        before.setAttribute("class", "tile "+color);
    }
    ev.target.setAttribute("class", "tile red");
    before = ev.target;
});