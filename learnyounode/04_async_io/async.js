var fs = require('fs');

var pathToFile = process.argv[2];

fs.readFile(pathToFile, 'utf8', function (err, contents) {
    if (err) throw err;

    var arrLines = contents.split('\n');
    var numLines = (arrLines.length) - 1;
    console.log(numLines);
});