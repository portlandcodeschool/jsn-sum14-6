var fs = require('fs');

module.exports = function (file, callback) {

fs.readFile(file, function (err, data){
  if (err) throw err;
  var arr = JSON.parse(data);
  callback(null, arr);
});

}