var fs = require('fs');

var pathToFile = process.argv[2],
    contents = fs.readFileSync(pathToFile, 'utf8'),
    arrLines = contents.split('\n'),
    numLines = (arrLines.length) - 1;

console.log(numLines);