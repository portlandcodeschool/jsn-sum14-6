// Create a program that prints a list of files in a given directory,
// filtered by the extension of the files. You will be provided a
// directory name as the first argument to your program (e.g.
// '/path/to/dir/') and a file extension to filter by as the second
// argument.

// For example, if you get 'txt' as the second argument then you will
// need to filter the list to only files that end with .txt.

// The list of files should be printed to the console, one file per line.
// You must use asynchronous I/O

var fs = require('fs');
var path = require('path');

var extension = process.argv[3]; 
//var re = RegExp('\\.' + extension + '$');

fs.readdir(process.argv[2], function (err, files) {
  files.forEach(function (item) {
    if (path.extname(item) === ('.' + extension)) console.log(item);
  });
});


// First Way 
// fs.readdir(process.argv[2], function(err, files){
//   if (err) throw err; 
//   for (var i = 0; i < files.length; i++){
//     if(re.test(files[i])){
//       console.log(files[i]);
//     }
//   }
// });

// Second Way

// fs.readdir(process.argv[2], function(err, files){
//   if (err) throw err; 
//   files.forEach(function(item){
//     if(re.test(item)){
//       console.log(item); 
//     }
//   });
// });


// Solution: 

//   var fs = require('fs')
//   var regex = new RegExp('\\.' + process.argv[3] + '$')

//   fs.readdir(process.argv[2], function (err, list) {
//     list.forEach(function (file) {
//       if (regex.test(file))
//         console.log(file)
//     })
//   })


