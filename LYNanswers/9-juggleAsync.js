var http = require('http');
var bl = require('bl');
var results = [];
var getCompleted = 0;

for (var i = 0; i < 3; i++) getStuff(i);

function getStuff (urlIndex) {
  var urls = process.argv.slice(2); //get the urls from arguments 1 and following
  http.get(urls[urlIndex], function (request){
    request.pipe(bl(function(err,data){
      if (err) return console.error(data);
      results[urlIndex] = data.toString();
      getCompleted += 1;
      if ( getCompleted === 3 ) {
        logResults();
      } 
    }));
  });
}

function logResults () {
  results.forEach(function (item){
    console.log(item);
  });
}


//official solution

 // var http = require('http')
 //  var bl = require('bl')
 //  var results = []
 //  var count = 0

 //  function printResults () {
 //    for (var i = 0; i < 3; i++)
 //      console.log(results[i])
 //  }

 //  function httpGet (index) {
 //    http.get(process.argv[2 + index], function (response) {
 //      response.pipe(bl(function (err, data) {
 //        if (err)
 //          return console.error(data)

 //        results[index] = data.toString()
 //        count++

 //        if (count == 3) // yay! we are the last one!
 //          printResults()
 //      }))
 //    })
 //  }

 //  for (var i = 0; i < 3; i++)
 //    httpGet(i)