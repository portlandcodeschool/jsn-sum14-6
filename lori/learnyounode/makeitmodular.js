var filterADir = require('./solution_filter.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterADir(dir, filterStr, function printThem(err, list) {
	if(err)
		return console.error('there was an error', err)

	list.forEach(function printIt(file) {
		console.log(file)
	})
})

//two files-------

var fs = require('fs')
var path = require('path')

module.exports = function filterADir(dir, filterStr, printThem){

	fs.readdir(dir, function filterAListOfFiles(err, list) {
		if (err)
			return callback (err)

		list = list.filter(function filenameMatchesExtention(file) {
			return path.extname(file) === '.' + filterStr
		})
		printThem(null, list)
	})
}