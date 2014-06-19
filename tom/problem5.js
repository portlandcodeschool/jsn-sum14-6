var fs = require('fs'), path = process.argv[2], file = '', lines = '';

logIt = function(err, file) {
  lines = file.split('\n');
  console.log(lines.length - 1 )
}

file = fs.readFile(path, 'utf8', logIt);
