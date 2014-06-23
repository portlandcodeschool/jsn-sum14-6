var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var source = process.argv[3];

var server = http.createServer(function(req, res) {
  sourceStream = fs.createReadStream(source);
  sourceStream.pipe(res);
});

server.listen(port);
