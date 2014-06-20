var fs = require('fs');
var path = require('path');
var results = [];

module.exports = function(pathToFile, ext, callback) {

  return {
    filter: function( pathToFile, ext, callback ) {
      console.log('"callback" in module filter function: ' + callback);

      log = function(err, files) {
        for ( var i = 0; i < files.length; i++ ) {
          path.extname(files[i]);
          if (path.extname(files[i])=== ('.' + ext)) {
            results.push(files[i]);
          }
        }
      }

      fileArray = fs.readdir( pathToFile, log );
      callback(null, fileArray);
    }
  };

}
