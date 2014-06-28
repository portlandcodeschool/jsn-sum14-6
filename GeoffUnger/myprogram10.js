var port = process.argv[2];
var net = require('net');
var server = net.createServer(function (socket) {
    var date = new Date();
    var year = date.getFullYear();
    var month = ((date.getMonth() < 10) ? "0" : "") + (String(date.getMonth()+1));
    var day =  ((date.getDate() < 10) ? "0" : "") + (String(date.getDate()));
    var hours = ((date.getHours() < 10 ? "0" : "")) + (String(date.getHours()));
    var minutes = ((date.getMinutes() < 10 ? "0" : "")) + (String(date.getMinutes()));
    socket.write(year + "-" + month + "-" + day + " " + hours + ":" + minutes + "\n");
    socket.end();
})
server.listen(port);


