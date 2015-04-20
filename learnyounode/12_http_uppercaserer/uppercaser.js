var http = require('http'),
    map = require('through2-map'),
    port = process.argv[2];;

var server = http.createServer(function (request, response) {
    // check request type
    if (request.method != 'POST') {
        return response.end('Need a POST request');
    }

    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(response);


});

server.listen(port);