var module = require('./problem6_module.js');
var pathToFile = process.argv[2], ext = process.argv[3];

var logger = function(err, matchArray) {
  if (err) {
    console.log('There was an error:/n' + err);
    return false;
  }
  for (var i = 0; i < matchArray.length; i++) {
    console.log(matchArray[i]);
  }
};
pathToFile.filter(pathToFile, ext, logger);
