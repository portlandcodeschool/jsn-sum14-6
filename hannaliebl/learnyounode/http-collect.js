var http = require( 'http' );
var concat = require( 'concat-stream' );

var url = process.argv[2];

http.get(url, function (response, err) {
    if (err) console.log("error");
    response.pipe(concat(function (data) {
        console.log(data.toString().length);
        console.log(data.toString());
    }))
});