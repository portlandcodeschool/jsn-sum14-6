// Write a program that uses a single asynchronous filesystem operation
// to read a file and print the number of newlines it contains to the
// console (stdout), similar to running `cat file | wc -l`.

// The full path to the file to read will be provided as the first
// command-line argument.

var fs = require('fs');

fs.readFile(process.argv[2], {encoding: 'utf8'}, function(err, data){
  if (err) throw err; 
  console.log(data.split('\n').length-1);
});


//solution: 
  // var fs = require('fs')
  // var file = process.argv[2]

  // fs.readFile(file, function (err, contents) {
  //   // fs.readFile(file, 'utf8', callback) can also be used
  //   var lines = contents.toString().split('\n').length - 1
  //   console.log(lines)
  // })