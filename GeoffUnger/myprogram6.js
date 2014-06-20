var path = process.argv[2];
var extension = process.argv[3];
var callback = function (err, data) {
    //console.log("Callback called");
    data.map(function(item){
        console.log(item);
    })
}



var moduleFn = function (dir, ext, callbk) {
    fs = require('fs');
    var fileList = [];
    var lister = function (err, data) {
        if(err)
            return callback(err);
        data.map(function (item) {
            if (item.split(".")[1] == extension) {
                fileList.push(item);
                //console.log("pushing " + item + " to list");
            }
        })
        callbk(null,fileList);
    }
    fs.readdir(dir, lister);

}
moduleFn(path,extension,callback);