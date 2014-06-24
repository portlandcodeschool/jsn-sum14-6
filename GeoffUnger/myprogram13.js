var http = require("http");
var url = require("url");

var callback = function(request, response){
    //console.log(request);
    var parsedURL = url.parse(request.url, true);
    //console.log(parsedURL);
    var route = parsedURL.pathname;
    var query = parsedURL.query;
    var date = new Date(query.iso);
    switch(route){
        case "/api/parsetime":{
            var timeObj = {};
            timeObj.hour = date.getHours();
            timeObj.minute = date.getMinutes();
            timeObj.second = date.getSeconds();
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.write(JSON.stringify(timeObj));
            response.end();
            break;
        }
        case "/api/sayhi":{
            response.write("Hello there " + query.name + "!");
            console.log(query.name);
            response.end();
        }
        case "/api/unixtime":{
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.write(JSON.stringify({unixtime:date.getTime()}));
            response.end();
            break;
        }
        case "/":{
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write("<marquee><h1>HOME PAGEEEEEE!!!</h1></marquee>");
            response.end();
        }
        default :{
            response.writeHead(404, {'Content-Type':'text/html'});
            response.write("<h1>NOTHING FOUND</h1>");
        }
    }
}

var server = http.createServer(callback);
server.listen(process.argv[2]);
