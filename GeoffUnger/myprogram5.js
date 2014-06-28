var fs = require('fs');
var path = process.argv[2];
var extension = process.argv[3];
var callback = function (err, data) {
    data.map(function (item) {
        if (item.split(".")[1] == extension) {
            console.log(item);
        }
    })

}

fs.readdir(process.argv[2], callback);