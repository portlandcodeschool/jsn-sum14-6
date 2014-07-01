var filterADir = require('./solution_filter.js')
var dir =process.argv[2]
var filterStr = process.argv [3]

filterADir(dir, filterStr, function printThem (err, trimmedlist){
	if (err)
		return console.error('There was an error', err)

	trimmedlist.forEach(function printIt(file){
		console.log (file)
	})
})


