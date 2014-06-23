var fs = require('fs');

readRecipeData = function (file, callback) {
    fs.readFile(file, function(error, data) {
        if (error) throw error;
        file = JSON.parse(data);
        callback(null, file);
    });
}

module.exports = readRecipeData;