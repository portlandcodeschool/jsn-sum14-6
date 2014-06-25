var fs = require('fs');
var path = require('path');

module.exports = function ( dirName, fileExt, cb ) {
  fs.readdir(dirName, function (err, files){
    var filteredFiles = [];
    if (err) {
      cb(err);
    } else {
      files.forEach(function(file){
        if (path.extname(file) === '.' + fileExt) {
          filteredFiles.push(file);
        }
      });
      cb(null, filteredFiles); // first parameter would be error, so we give it null
    }
  });
};


//my solution

// var fs = require('fs'); 

// function filterModule(dirname, extension, callback) {
//   var re = RegExp('\\.' + extension + '$');
//   var result = [];

//   fs.readdir(dirname, function(err, files){
//     if (err){
//       return callback(err, null);
//     } else {
//       files.forEach(function(item){
//         if(re.test(item)){
//           result.push(item); 
//         }
//       });
//       callback(null, result);
//     }
//   });
// }

// module.exports = filterModule;


// solution_filter.js:

//   module.exports = function (dir, filterStr, callback) {
//     var fs = require('fs')
//     var regex = new RegExp('\\.' + filterStr + '$')

//     fs.readdir(dir, function (err, list) {
//       if (err)
//         return callback(err)

//       list = list.filter(function (file) {
//         return regex.test(file)
//       })

//       callback(null, list)
//     })
//   }