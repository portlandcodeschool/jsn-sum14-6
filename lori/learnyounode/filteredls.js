var fs = require ('fs');
var path = require ('path');


var extension = '.' + process.argv[3];

//console.log(process.argv[2],extension);

fs.readdir(process.argv[2], function (err,list){
			for (i=0; i<list.length; i++){

				if (extension == path.extname(list[i])){
					console.log(list[i]);
				}
			}
			
			//console.log(path.extname(list[0]));

});












