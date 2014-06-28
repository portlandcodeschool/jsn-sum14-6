var fs = require("fs");
var http = require("http");
var port = process.argv[2];
var file = process.argv[3];




var callback = function(request, response){
    var fileStream = fs.createReadStream(file);

        fileStream.pipe(response);


}

var server = http.createServer(callback);

server.listen(port);