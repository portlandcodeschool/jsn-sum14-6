//LEARNYOUNODE

//1.

console.log("HELLO WORLD");



//2.

var sum = 0;
var vals = process.argv;

for(var i = 2; i < vals.length; i++) {
	sum += Number(vals[i]);
}

console.log(sum);


// //example from learnyounode

var result = 0
    
    for (var i = 2; i < process.argv.length; i++)
      result += Number(process.argv[i])
    
    console.log(result)


//3.

var fs = require('fs');

var filename = process.argv;
var fileBuffer = fs.readFileSync('./Untitled.txt');
var fileString = fileBuffer.toString();

console.log(fileString.split('\n').length);


//4.

var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, function (err, contents) {
  var lines = contents.toString().split('\n').length-1;
  console.log(lines);
});



//5.

var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + process.argv[3])
      console.log(file)
  })
})


//6.

var filterFn = require('./h1.js');
var dir = process.argv[2];
var filterStr = process.argv[3];

filterFn(dir, filterStr, function(err, list) {
	if(err)
		return console.error('There was an error:', err)

	list.forEach(function(file) {
			console.log(file)
	});
});



//7.