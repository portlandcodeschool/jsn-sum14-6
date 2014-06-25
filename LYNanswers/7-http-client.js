

var http = require('http');

var urlToFetch = process.argv[2];

http.get(urlToFetch, function (response) { // response is a stream of data

  response.on('data', function (chunk) {
    console.log(chunk.toString());
  });

  response.on('error', function (err) {
    console.error(err);
  });

});

// also this way

// http.get(urlToFetch, function (response) {
//   response.pipe(process.stdout);
// });



// nodeschool solution:
// var http = require('http')

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8') // makes the response chunks into strings
//   response.on('data', console.log) // console.log is a callback
//   response.on('error', console.error) // console.error is a callback
// })