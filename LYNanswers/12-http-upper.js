// Write an HTTP server that receives only POST requests and converts 
// incoming POST body characters to upper-case and returns it to the client.

// Your server should listen on the port provided by the first argument to your program.

var map = require("through2-map");
var http = require('http');

var server = http.createServer(function (req, res) {

  if (req.method !== 'POST') {
    res.writeHead(404);
    res.end('Sorry, no can do');
  }

  res.writeHead(200, {'Content-Type': 'text/plain'});

  req.pipe(
    map(function (chunk) {
      return chunk.toString().toUpperCase();
    })
  )
  .pipe(res);

});

server.listen(process.argv[2]);

//official solution had this difference
//server.listen(Number(process.argv[2]);