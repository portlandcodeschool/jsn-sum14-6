var fs = require('fs');
var path = require('path');

filter = function( pathToFile, ext ) {
  log = function(err, files) {
    for ( var i = 0; i < files.length; i++ ) {
      //console.log(path.extname(files[i]));
      path.extname(files[i]);
      if (path.extname(files[i])=== ('.' + ext)) {
        console.log(files[i]);
      }
    }
  };

  fileArray = fs.readdir( pathToFile, log );

};

filter(process.argv[2], process.argv[3]);
