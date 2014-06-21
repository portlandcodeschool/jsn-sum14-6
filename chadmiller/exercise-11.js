var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var filename = process.argv[3];

var server = http.createServer(function(req, res) {

  res.writeHead(200, { 'content-type': 'text/plain' });

  var readStream = fs.createReadStream(filename, { encoding: 'utf8' });

  readStream.on('open', function() {
    readStream.pipe(res);
  });

  readStream.on('error', function() {
    res.end('error');
  });
});

server.listen(port);
