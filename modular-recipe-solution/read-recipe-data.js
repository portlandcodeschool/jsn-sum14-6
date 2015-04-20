var fs = require('fs');

module.exports = function (file, callback) {
    fs.readFile(file, function (error, data) {
        if (error) throw error;
        
        // turn the JSON data into a proper Javascript data structure
        file = JSON.parse(data);
        callback(null, file);
    })
}