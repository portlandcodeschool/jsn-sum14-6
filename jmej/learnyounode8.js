var http = require('http');
var url = process.argv[2];
var str = ""

http.get(url, function(res) {
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    str += chunk;
  });
  res.on('end', function (chunk) {
  	console.log(str.length);
    console.log(str);
  });


});
