

var http = require('http');

var urls = [process.argv[2], process.argv[3], process.argv[4]];

var complete = [false,false,false];

var output = ["","",""];

urls.forEach(function(item, urlIndex, array){
    var req = http.request(urls[urlIndex], function (res) {
        res.on('data', function (chunk) {
            output[urlIndex] += chunk.toString();
            //console.log(returnString);
        })
        res.on('end', function () {
            complete[urlIndex] = true;
            //console.log("Index " + index + " end");
            //console.log(complete);
            //console.log(output);
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
        //console.log("Outputting output index: " + index);
        //console.log("Length of index item " + index + ": " + output[index].length);
    })
}



