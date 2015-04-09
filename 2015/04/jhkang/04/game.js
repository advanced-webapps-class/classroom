/**
 * Created by jhkang on 4/9/15.
 */
var game_tile = document.getElementById("game_form");
var score_wrap = document.getElementById("score_form");
var score_form = document.getElementById("score");
var score = 0;

function positionChange() {
    var x = Math.random()*(document.body.scrollWidth-20);
    var y = Math.random()*(document.body.scrollHeight-score_wrap.scrollHeight-20)+score_wrap.scrollHeight;

    target.style.left = x+"px";
    target.style.top= y+"px";
}

var target = document.createElement("div");
target.setAttribute("id", "target");

target.addEventListener("click", function() {
    ++score;
    score_form.innerHTML = score;
});

positionChange();
game_tile.appendChild(target);

setInterval(positionChange, 1000);
