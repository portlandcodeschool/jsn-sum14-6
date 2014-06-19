var fs = require('fs'), path = process.argv[2], file = '', lines = '';

file = fs.readFileSync(path).toString();
lines = file.split('\n');
console.log(lines.length - 1);
