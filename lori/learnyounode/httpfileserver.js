var http = require('http');
var url = require('url');
var fs = require('fs');


var server = http.createServer(function (req,res) {
 fs.createReadStream(process.argv[3]).pipe(res);{
	
}
});
server.listen(process.argv[2]);


