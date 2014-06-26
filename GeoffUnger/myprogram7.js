var http = require('http');

var url = process.argv[2];

var returnString = "";

http.get(url, function(res){
    res.on('data', function(chunk){
        returnString += chunk.toString();
    })
    console.log(returnString.length);
    console.log(returnString);
})
