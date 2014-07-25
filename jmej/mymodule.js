var fs = require('fs');
var path = require('path');
var o = []
var error = null

module.exports = function(dir, ext, callbackFn){

fs.readdir(dir, function (err, list){
	if (err) 
		return callbackFn(err);

	for (var i = 0; i < list.length; i++){
		if (path.extname(String(list[i])) === "."+ext)
			o.push(list[i]);
		}
		callbackFn(null, o);
});
};

