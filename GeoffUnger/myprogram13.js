var http = require("http");
var url = require("url");

var callback = function(request, response){
    response.write("Hi!");
    response.end();
}

var server = http.createServer(callback);
server.listen(process.argv[2]);
