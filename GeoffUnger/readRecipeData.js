readRecipeData = function (file, callback) {
    //this function should:
    // 1. call a method from node that will read a file asynchronously (hint: fs module)
    //    - this function call should:
    //      - read the file and check for errors,
    //        and throw an error if there is one
    //      - use the file parameter/ local variable as a variable to pass in each file
    //        location (recipes.json is passed in elsewhere)
    // 2. turn the JSON data into a proper Javascript data structure
    //    (e.g. an array with some stuff in it)
    // 3. Call the callback function (using the parameter/variable from above)
    //    and (in this order)
    //     - pass in null for the first argument
    //       (this means we are not passing an error object)
    //     - pass in the array of your entire data
    var recipeJSON = [];
    fs.readFile(file,{encoding:'utf8'},function(error,data){
        if(error) throw error;
        recipeJSON = JSON.parse(data);
        callback(null,recipeJSON);
    });

}

module.exports = readRecipeData;