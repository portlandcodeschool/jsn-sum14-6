var http = require('http'),
    url = process.argv[2],
    stream = '',
    int = 0;

http.get(url, function (response) {
    response.on('data', function (data) {
        response.setEncoding('utf8');
        int += data.length;
        stream += data;
    });
    response.on('end', function () {
        console.log(int + '\n' + stream);
    })
});