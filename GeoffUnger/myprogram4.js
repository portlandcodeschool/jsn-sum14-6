/**
 * Created by shopigniter on 6/16/14.
 */
var fs = require('fs');
var callback = function(err,data){
    count = data.split("\n").length - 1;
    console.log(count);
}
var output = fs.readFile(process.argv[2],{encoding:'utf8'}, callback);


