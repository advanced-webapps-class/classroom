// https://gist.github.com/132080/110d1b68d7328d7bfe7e36617f7df85679a08968
//
var getJSON = (function(){
    var unique = 0;
    return function(url, callback, context) {
        // INIT
        var name = "_jsonp_" + unique++;
        if (url.match(/\?/)) url += "&callback="+name;
        else url += "?callback="+name;

        // Create script
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;

        // Setup handler
        window[name] = function(data){
            callback.call((context || window), data);
            document.getElementsByTagName('head')[0].removeChild(script);
            script = null;
            delete window[name];
        };

        // Load JSON
        document.getElementsByTagName('head')[0].appendChild(script);
    };
})();