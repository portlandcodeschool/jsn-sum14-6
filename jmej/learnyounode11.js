    var http = require('http')
    var fs = require('fs');
    var port = process.argv[2];
    var loc = process.argv[3];


 
    

	var server = http.createServer(function (req, res) {
  		res.writeHead(200, {"Content-Type": "text/plain"});
  			var readStream = fs.createReadStream(loc, {encoding:'utf8'});
    		readStream.on('open', function () {
    		readStream.pipe(res);
 	 		});
	});
      
    server.listen(port)


    /*   official solution - simpler, uses pipe instead of event handler

    var http = require('http')
    var fs = require('fs')
    
    var server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })
    
      fs.createReadStream(process.argv[3]).pipe(res)
    })
    
    server.listen(Number(process.argv[2])) */

