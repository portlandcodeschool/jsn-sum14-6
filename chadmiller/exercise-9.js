var http = require('http');
var queue = {};

function QueueItem(data) {
  this.data = '';
  this.isComplete = false;
}

function populateQueue() {
  for (var i = 2; i < process.argv.length; i++)
    queue[process.argv[i]] = new QueueItem();
}

function isComplete() {
  for (var url in queue) {
    if (!queue[url].isComplete)
      return false;
  }
  return true;
}

function printResults() {
  for (var url in queue)
    console.log(queue[url].data);
}

function httpGet(url) {
  http.get(url, function(res) {
    res.setEncoding('utf8');
    res.on('data', function(data) {
      queue[url].data += data;
    });
    res.on('end', function() {
      queue[url].isComplete = true;
      if (isComplete()) printResults();
    });
    res.on('error', console.error);
  });
}

function run() {
  for (var url in queue)
    httpGet(url);
}

populateQueue();
run();
