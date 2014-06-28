

var http = require('http');

var urls = [];
var complete = [];
var output = [];

var count = 1;

while(process.argv[count + 1]){
    urls[count-1] = process.argv[count+1];
    complete[count-1] = false;
    output[count-1] = "";
    count++;
}

urls.forEach(function(item, urlIndex, array){
    var req = http.request(urls[urlIndex], function (res) {
        res.on('data', function (chunk) {
            output[urlIndex] += chunk.toString();
        })
        res.on('end', function () {
            complete[urlIndex] = true;
            checkComplete();
        })

    }).end();
})

var checkComplete = function(){
    var allComplete = true;
    complete.forEach(function(item,index,array){
        if(complete[index] == false){
        allComplete = false;
        }
    });
    if(allComplete == false)
    {
        return;
    }
    output.forEach(function(item, index){
        console.log(output[index]);
    })
}



