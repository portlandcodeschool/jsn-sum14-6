/**
 * Created by shopigniter on 6/16/14.
 */
var fs = require('fs');
var output = fs.readFileSync(process.argv[2],{encoding:'utf8'});
//console.log(output);
var count = output.split("\n").length - 1;
console.log(count);
return count;