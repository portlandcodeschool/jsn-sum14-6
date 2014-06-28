var fs = require("fs");
var http = require("http");
var map = require("through2-map");
var port = process.argv[2];
var file = process.argv[3];


var callback = function(request, response){

    if(request.method == "POST"){
        request.pipe(map(function (chunk) {

            return chunk.toString().toUpperCase();

        })).pipe(response);
    } else {response.end();}

}

var server = http.createServer(callback);

server.listen(port);