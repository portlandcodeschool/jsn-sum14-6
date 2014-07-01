var fs = require ('fs');
var path = require ('path');

module.exports =function filterADir(dir, filterStr, printThem){

	fs.readdir(dir, function filterAListOfFiles(err, list) {
		if (err)
			return printThem(err);

		list = list.filter(function fileNameMatchesExtension(file){
			return path.extname(file) === '.' + filterStr;
		}

)
		printThem (null, list)
		});
}