var myModule = require('./mymodule'),
    directory = process.argv[2],
    fileExt = process.argv[3],
    callback = process.argv[4];

myModule(directory, fileExt, callback);



// Given solution:

//var filterFn = require('./solution_filter.js')
//var dir = process.argv[2]
//var filterStr = process.argv[3]
//
//filterFn(dir, filterStr, function (err, list) {
//    if (err)
//        return console.error('There was an error:', err)
//
//    list.forEach(function (file) {
//        console.log(file)
//    })
//})