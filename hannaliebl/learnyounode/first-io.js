var fs = require('fs');

var file = process.argv[2];
var buffer = (fs.readFileSync(file)).toString();
var lines = (buffer.split('\n'));
var newlines = ((lines.length) - 1);
console.log(newlines);