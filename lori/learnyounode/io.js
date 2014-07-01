var fs = require ('fs');


var myFile = fs.readFile(process.argv[2], {encoding: 'utf8'}, function (err,data){
			if (err) throw err;
			console.log(data.split('\n').length -1);

});










