var readRecipeData = require('./read-recipe-data'),
    printRecipeCard = require('./print-recipe-card');

readRecipeData('../recipes.json', printRecipeCard);