var dir = process.argv[2];
var ext = process.argv[3];
var mymodule = require('./mymodule.js')

var callback = function(err, data){
	if (err)
		return console.log(err);
	for (var i in data)	
	console.log(data[i]);}

mymodule(dir, ext, callback);