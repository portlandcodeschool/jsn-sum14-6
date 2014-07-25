var fs = require('fs');


fs.readFile(process.argv[2], function (err, data){
	if (err) throw err;
	var arr = JSON.parse(data);
	console.log(arr);
});



