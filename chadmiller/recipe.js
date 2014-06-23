var readRecipeData = require('./read-recipes');
var printRecipeCards = require('./print-recipes');

readRecipeData('./recipes.json', printRecipeCards);
