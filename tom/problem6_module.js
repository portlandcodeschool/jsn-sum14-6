var fs = require('fs');
var path = require('path');
var results = [];

module.exports = function( pathToFile, ext, callback ) {
  fs.readdir(pathToFile, function fillResult(err, fileNames) {
    if(err) { return callback(err); }
    for (var i = 0; i < fileNames.length; i++) {
      if (path.extname(fileNames[i])=== ('.' + ext)) {
        results.push(fileNames[i]);
      }
    }
    callback(null, results);
  });
};

