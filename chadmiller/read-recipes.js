var fs = require('fs');

function readRecipeData(file, callback) {
  fs.readFile(file, function(err, data) {
    if (err)
      throw new Error(err);

    // using a try/catch statement because JSON.parse throws a
    // SyntaxError exception if the string is not valid JSON
    try {
      data = JSON.parse(data);
    } catch (err) {
      throw new Error(err);
    }

    callback(null, data);
  });
}

module.exports = readRecipeData;
