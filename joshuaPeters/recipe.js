var fs = require('fs');
var recipeBox = {};

recipeBox.readRecipeData = function function ( file, callback) {
	fs.readFile(file, {encoding:'utf8'},  function (error, data) {

	var outputArray;
	if (error) throw error;
	outputArray =JSON.parse(data);

	callback (null, outputArray);
	});
}

recipeBox.printRecipeCards = function



// here we gooooooo






recipeBox.readRecipeData