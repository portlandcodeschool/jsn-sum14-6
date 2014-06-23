var readRecipeData = require('./readrecipe.js');
var printRecipeCards = require('./printrecipe.js');

readRecipeData('./recipes.json', printRecipeCards);