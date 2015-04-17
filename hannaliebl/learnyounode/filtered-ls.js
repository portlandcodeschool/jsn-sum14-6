var fs = require('fs');
var path = require('path');

var directory = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(directory, function (err, list) {
    if (err) console.log("error");
    var finalArr = [];
    for (var i = 0; i < list.length; i++) {
        if (path.extname(list[i]) === ext) {
            finalArr.push(list[i]);
        }
    }
    for (var i = 0; i < finalArr.length; i++) {
        console.log(finalArr[i]);
    }
});

// official solution:
// var fs = require('fs')
//    var path = require('path')
   
//    fs.readdir(process.argv[2], function (err, list) {
//      list.forEach(function (file) {
//        if (path.extname(file) === '.' + process.argv[3])
//          console.log(file)
//      })
//    })