var moduleFn = function (dir, ext, callbk) {
    fs = require('fs');
    var fileList = [];
    var lister = function (err, data) {
        if(err)
            return callback(err);
        data.map(function (item) {
            if (item.split(".")[1] == ext) {
                fileList.push(item);
                //console.log("pushing " + item + " to list");
            }
        })
        callbk(null,fileList);
    }
    fs.readdir(dir, lister);

}
module.exports = moduleFn;