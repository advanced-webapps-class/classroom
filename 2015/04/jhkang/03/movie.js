/**
 * Created by jhkang on 4/2/15.
 */

function movePage(){
    var url = "http://m.movie.daum.net/data/movie/movie_info/box_office.json?country=KR&startDate=20150101&endDate=20150401&pageSize=10&pageNo=";
    getJSON(url+nowPage, displayItems);
}

function displayItems(data) {
    var html = tmpl(itemsTpl, {
        items : data.data
    });

    document.getElementById("items").innerHTML = html;
}

var nowPage = 1;

var itemsTpl = document.getElementById("itemsTpl").innerHTML;
movePage();
