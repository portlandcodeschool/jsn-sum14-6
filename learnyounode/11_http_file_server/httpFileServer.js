var http = require('http'),
    fs = require('fs'),
    port = process.argv[2],
    file = process.argv[3];

var server = http.createServer(function (request, response) {
    // open file as a readable stream
    var readStream = fs.createReadStream(file);

    // wait until readable stream is valid before piping
    readStream.on('open', function () {
        // pipe read stream to response object
        readStream.pipe(response);
    });

    // catch errors
    readStream.on('error', function (err) {
        res.end(err);
    });
});
server.listen(Number(port));

// questions on real sol'n: why writeHead()? encoding?