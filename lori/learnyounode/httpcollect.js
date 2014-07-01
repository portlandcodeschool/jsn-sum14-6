var http = require('http');
var concat = require('concat-stream');



http.get(process.argv[2], function (res) {
		res.setEncoding('utf8');
		res.pipe(concat(function(data){
			console.log(data.length);
		console.log(data.toString());
		//console.log (data);
	}));


		// res.on('data', function(data){
		
		
		// 	});

		
	
	
});