var fs = require('fs');
var path = require('path');

module.exports = function(dir, extension, cb) {
  fs.readdir(dir, function(err, list) {
    var filteredFiles;

    if (err) return cb(err);

    filteredFiles = list.filter(function(file) {
      return path.extname(file) === '.'+extension;
    });

    cb(null, filteredFiles);
  });
};
