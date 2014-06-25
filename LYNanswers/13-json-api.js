var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
  var hms = {};
  var epoch = {};

  var parsedUrl = url.parse(req.url, true);
  var queryObj = parsedUrl.query;

  hms.hour = (new Date(queryObj.iso)).getHours();
  hms.minute = (new Date(queryObj.iso)).getMinutes();
  hms.second = (new Date(queryObj.iso)).getSeconds();

  epoch.unixtime = (new Date(queryObj.iso)).getTime();

  if (parsedUrl.pathname === '/api/parsetime') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(hms));
  };

  if (parsedUrl.pathname === '/api/unixtime') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(epoch));
  }

});

server.listen(process.argv[2]);

// official answer 

// var http = require('http')
// var url = require('url')

// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }

// function unixtime (time) {
//   return { unixtime : time.getTime() }
// }

// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result

//   if (/^\/api\/parsetime/.test(req.url))
//     result = parsetime(time)
//   else if (/^\/api\/unixtime/.test(req.url))
//     result = unixtime(time)

//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))