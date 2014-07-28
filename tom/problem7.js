var http = require('http');
var site = process.argv[2];

http.get(site, function(stream) {
  stream.setEncoding('utf8');
  stream.on("data", function (data) {console.log(data);});
} );
