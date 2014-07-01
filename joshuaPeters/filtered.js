var fs = require('fs');
var path = require('path');
var ext1 = '.' + process.argv[3];

fs.readdir(process.argv[2], function(err, files){
  if(err){
    throw err
  }
  //console.log(files);
  files.forEach(function(filename){
    var ext = path.extname(filename);
    if(ext === ext1){
      console.log(filename);
    }
  });
});
