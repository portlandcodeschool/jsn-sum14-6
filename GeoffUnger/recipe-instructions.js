///////////////////////////////////////////
// INSTRUCTIONS
// 1. Follow the instructions in the comments
// 2. Test to see that your app works
// 3. Refactor so that each method of 
//    recipeBox is in a separate file
///////////////////////////////////////////

fs = require('fs');

var recipeBox = {};
recipeBox.readRecipeData = require('./readRecipeData.js');
recipeBox.printRecipeCards = require('./printRecipeCards.js')

recipeBox.readRecipeData('./recipes.json', recipeBox.printRecipeCards);
// this function call and the options (arguments) passed in should 
// give you a some hints on how the above code should work. 
