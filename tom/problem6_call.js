var module = require('./problem6_module.js');
var logger = function(err, matchArray) {
  if (err) {
    console.log('There was an error:\n' + err);
    return false;
  }
  for (var i = 0; i < matchArray.length; i++) {
    console.log(matchArray[i]);
  }
}
module(process.argv[2], process.argv[3], logger);
