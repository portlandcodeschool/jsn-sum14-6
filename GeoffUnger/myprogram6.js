var path = process.argv[2];
var extension = process.argv[3];
var moduleFn = require('./myprogram6-module.js')
var callback = function (err, data) {
    //console.log("Callback called");
    data.map(function(item){
        console.log(item);
    })
}




moduleFn(path,extension,callback);