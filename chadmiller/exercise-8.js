var http = require('http');
var url = process.argv[2];

http.get(url, function(res) {
  var str = '';
  res.setEncoding('utf8');
  res.on('data', function(data) {
    str += data;
  });
  res.on('end', function() {
    console.log(str.length);
    console.log(str);
  });
  res.on('error', console.error);
});
