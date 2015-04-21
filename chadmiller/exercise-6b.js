var filterDir = require('./exercise-6a');
var dir = process.argv[2];
var extension = process.argv[3];

filterDir(dir, extension, function(err, list) {
  if (err) throw err;
  list.forEach(function(item) {
    console.log(item);
  });
});
