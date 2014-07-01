var http = require ('http');
var url = process.argv[2];
var allData = "";
function collectData(data){
	allData+=data.toString();
}
function finsih(){
	console.log(allData.length);
	console.log(allData);
}
function callback(response){
response.on('err',collectData)
response.on('data', finsih)
response.on('end', allData)

}


callback(allData.finsih);