// Write a TCP time server!

// Your server should listen to TCP connections on the port provided by the first argument to your program. For each connection you must write the current date & time in the format:

//     "YYYY-MM-DD hh:mm"

// followed by a newline character. Month, day, hour and minute must be zero-filled to 2 integers. For example:

//     "2013-07-06 07:42"

var net = require('net');

var server = net.createServer(function(socket){
  var timeOutput;
  var date = new Date();
  var year = date.getFullYear();
  var month = pad((date.getMonth() + 1), 2);
  var dayNumber = pad(date.getDate(), 2);
  var hours = pad(date.getHours(), 2);
  var minutes = pad(date.getMinutes(), 2);



  timeOutput =  year + '-' + month + '-' + dayNumber + ' ' +
                hours + ':' + minutes + '\n';

  socket.end(timeOutput);
});

server.listen(process.argv[2]);

function pad(num, size) {
    var padded = num.toString();
    while (padded.length < size) padded = "0" + padded;
    return padded;
}

// official solution 

// var net = require('net')

//     function zeroFill(i) {
//       return (i < 10 ? '0' : '') + i
//     }

//     function now () {
//       var d = new Date()
//       return d.getFullYear() + '-'
//         + zeroFill(d.getMonth() + 1) + '-'
//         + zeroFill(d.getDate()) + ' '
//         + zeroFill(d.getHours()) + ':'
//         + zeroFill(d.getMinutes())
//     }

//     var server = net.createServer(function (socket) {
//       socket.end(now() + '\n')
//     })

//     server.listen(Number(process.argv[2]))
