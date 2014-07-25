var http = require('http');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var str1 = "";
var str2 = "";
var str3 = "";
var r1 = false;
var r2 = false;
var r3 = false;

http.get(url1, function(res) {
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    str1 += chunk;
  });
  res.on('end', function (chunk) {
    r1=true;
    tryPrint();
  });
});

http.get(url2, function(res) {
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    str2 += chunk;
  });
  res.on('end', function (chunk) {
    r2=true;
    tryPrint();
  });
});

http.get(url3, function(res) {
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    str3 += chunk;
  });
  res.on('end', function (chunk) {
    r3=true;
    tryPrint();
  });
});

var tryPrint = function(){
if ((r1 == true) && (r2 == true) && (r3 == true)){
	console.log(str1);
	console.log(str2);
	console.log(str3);
	}
}