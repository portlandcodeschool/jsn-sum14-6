var http = require("http");
var url = require("url");

var callback = function(request, response){
    parsedURL = url.parse(request);
    //route = parsedURL.path TODO continue from here
}

var server = http.createServer(callback);
server.listen(process.argv[2]);
