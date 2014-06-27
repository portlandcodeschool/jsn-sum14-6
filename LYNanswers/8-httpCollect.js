// Write a program that performs an HTTP GET request to a URL provided to
// you as the first command-line argument. Collect all data from the
// server (not just the first "data" event) and then write two lines to
// the console (stdout).

// The first line you write should just be an integer representing the
// number of characters received from the server and the second line
// should contain the complete String of characters sent by the server.

// HINTS:
///There are two approaches you can take to this problem: 

//1) Collect data across multiple "data" events and append the results
//   together prior to printing the output. Use the "end" event to determine
//   when the stream is finished and you can write the output.

//2) Use a third-party package to abstract the difficulties involved in
//  collecting an entire stream of data. Two different packages provide
//  a useful API for solving this problem (there are likely more!):
//   bl (Buffer List) and concat-stream; take your pick!

//-----------------------------------------------------------

// Here is Dan's solution using method 1:
/*
var http=require('http');
var url = process.argv[2];

function onResponse(response) {
	var allData = "";

	function collectData(data) {
		allData += data;
	}
	function finish() {
		console.log(allData.length);
		console.log(allData);
	}

	response.setEncoding("utf8");
	response.on("error",console.error);
	response.on("data",collectData);
	response.on("end",finish)
}

http.get(url,onResponse);
*/

// Here is learnyounode's official solution, using method 2 with BL:


var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function (res) {
  res.pipe(bl(function (err, data){
    var wholeString = data.toString();
    console.log(wholeString.length + "\n" + wholeString);
  }));
});



// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err)
//       return console.error(data)
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })