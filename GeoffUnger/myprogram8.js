
var http = require('http');

var url = process.argv[2];

var returnString = "";

var req = http.request(url, function (res) {
    res.on('data', function (chunk) {
        returnString += chunk.toString();
        //console.log(returnString);
    })
    res.on('end', function () {
        console.log(returnString.length);
        console.log(returnString);
    })

    }).end();

