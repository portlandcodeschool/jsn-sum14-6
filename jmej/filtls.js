var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = process.argv[3];
var o = []

fs.readdir(dir, function (err, list){
	if (err) throw err;
	for (var i = 0; i < list.length; i++){
		if (path.extname(String(list[i])) === '.'+ext)
			o.push(list[i]);
		}
	for (var i in o)	
	console.log(o[i]);
}); 


