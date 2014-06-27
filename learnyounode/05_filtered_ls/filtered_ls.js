var fs = require('fs'),
    directory = process.argv[2],
    fileExt = process.argv[3];

fs.readdir(directory, function (err, files) {
    // files is an array of the names of the files in the directory excluding '.' and '..'
    for (var i = 0; i < files.length; i++) {
        if (files[i].indexOf('.' + fileExt) >= 0) {
            console.log(files[i]);
        }
    }
});