var list = function(directory, extension, callback){
    var fs = require('fs');
    var files = [];
    var callback = function (err, data) {
        data.map(function (item) {
            if (item.split(".")[1] == extension) {
                files.push(item);
            }
        });

    }
    fs.readdir(directory, callback);
    return(files);
};

module.exports = list;