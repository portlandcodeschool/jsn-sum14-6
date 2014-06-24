var http = require("http");
var url = require("url");

var callback = function(request, response){
    var parsedURL = url.parse(request.url, true);
    console.log(parsedURL);
    var route = parsedURL.pathname;
    var query = parsedURL.query;
    var date = new Date(query.iso);
    switch(route){
        case "/api/parsetime":{
            var timeObj = {};
            timeObj.hour = date.getHours();
            timeObj.minute = date.getMinutes();
            timeObj.second = date.getSeconds();
            response.write(JSON.stringify(timeObj));
            response.end();
            break;
        }
        case "/api/unixtime":{
            response.write(JSON.stringify({unixtime:date.getTime()}));
            response.end();
            break;
        }
    }
}

var server = http.createServer(callback);
server.listen(process.argv[2]);
