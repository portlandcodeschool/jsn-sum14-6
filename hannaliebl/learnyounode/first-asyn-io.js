var fs = require('fs');

var file = process.argv[2];

fs.readFile(file, function (err, data) {
    if (err) console.log("error");
    file = data.toString();
    console.log(((file.split('\n')).length - 1));
});