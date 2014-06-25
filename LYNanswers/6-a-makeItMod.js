var filterMod = require('./6-b-filterMod');

var directory = process.argv[2];
var fileExtension = process.argv[3];

filterMod(directory, fileExtension, function (err, files) {
  if (err) console.log(err);
  files.forEach(function (item) {
    console.log(item);
  });
});


// my solution
// var filterMod = require('./filterMod');
// var dirname = process.argv[2];
// var extension = process.argv[3];

// filterMod(dirname, extension, function (err, files) {
//   files.forEach(function (item) {
//     console.log(item);
//   });
// });

// solution.js:

//   var filterFn = require('./solution_filter.js')
//   var dir = process.argv[2]
//   var filterStr = process.argv[3]

//   filterFn(dir, filterStr, function (err, list) {
//     if (err)
//       return console.error('There was an error:', err)

//     list.forEach(function (file) {
//       console.log(file)
//     })
//   })