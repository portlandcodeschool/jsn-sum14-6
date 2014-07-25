var recipeRead = require('./recipeRead.js')
var recipePrint = require('./recipePrint.js')


recipeRead('./recipes.json', recipePrint);