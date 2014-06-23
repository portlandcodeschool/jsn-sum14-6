var http = require('http');
var site = process.argv[2];
var streamString = '';

http.get(site, function(stream) {
  stream.setEncoding('utf8');
  stream.on("data", function (data) {streamString += data;});
  stream.on("end", function () {
    console.log(streamString.length);
    console.log(streamString);
  });
} );
