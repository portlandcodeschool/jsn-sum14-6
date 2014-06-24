    var http = require('http');
    var port = process.argv[2];
 

	var server = http.createServer(function (req, res) {
      var body = "";
      req.on('data', function (chunk) {
        body += chunk;
        req.on('end', function () {
        var o = body.toString().toUpperCase();  
        res.writeHead(200);
        res.end(o);
          });
      }); 
	});
      
server.listen(port);