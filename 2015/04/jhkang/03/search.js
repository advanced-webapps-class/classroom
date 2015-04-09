/**
 * Created by jhkang on 4/2/15.
 */

function $(id) {
    return document.getElementById(id);
}

var apiKey = "839c06cf04a7579cd86d662465063e9d";
var nowPage = 1;

var searchForm = $("search_bar");
var searchText = $("search_text");
var itemsForm = $("items");
var moreForm = $("more");

var itemsTpl = $("itemsTpl").innerHTML;
var moreBtn = document.createElement("button");
moreBtn.innerHTML = "더보기";

$("items").innerHTML = "";

function searching(query) {
    var url = "https://apis.daum.net/search/web?apikey="+apiKey+"&output=json&result=10&q="+query+"&pageno="+nowPage;
    getJSON(url, displayItems);
}

function displayItems(data) {
    var html = tmpl(itemsTpl, {
        items : data.channel.item
    });

    moreForm.appendChild(moreBtn);
    itemsForm.innerHTML += html;
}

var beforeSearchText = '';
moreBtn.addEventListener('click', function(ev) {
    ++nowPage;
    searching(beforeSearchText);
    if(nowPage >= 500) moreForm.innerHTML = '';
});

searchForm.addEventListener('submit', function(ev) {
    nowPage = 1;
    itemsForm.innerHTML = '';
    searching(searchText.value);
    beforeSearchText = searchText.value;
});


