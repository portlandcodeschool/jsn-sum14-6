///////////////////////////////////////////
// INSTRUCTIONS
// 1. Follow the instructions in the comments
// 2. Test to see that your app works
// 3. Refactor so that each method of 
//    recipeBox is in a separate file
///////////////////////////////////////////

// Instructions start here:////////////////

//! bring in the fs module here !
var fs = require('fs');

var recipeBox = {};

recipeBox.readRecipeData = function (file, callback) {

fs.readFile(file, function (err, data){
  if (err) throw err;
  var arr = JSON.parse(data);
  callback(null, arr);
});

}

recipeBox.printRecipeCards = function (error, data) {

  if (error)
    throw(error);
  console.log("YOUR RECIPE COLLECTION")
  for (var i in data){
  console.log("\n"+"\n"+data[i].title)
    for (var ii in data[i].ingredients){
      if (data[i].ingredients[ii].amount >= 2){
      var unit = data[i].ingredients[ii].unit + "s";}
      else{
    var unit = data[i].ingredients[ii].unit;}
    console.log(data[i].ingredients[ii].amount+" "+unit+" "+"of "+data[i].ingredients[ii].ingredient);
  }
    for (var iii in data[i].directions){
      if (data[i].directions[iii].unit == ""){
        console.log("   "+(Number(iii)+1)+". "+data[i].directions[iii].direction);
      }else{
        console.log("   "+(Number(iii)+1)+". "+data[i].directions[iii].direction+" "+"for "+data[i].directions[iii].duration+" "+data[i].directions[iii].unit);
    }
      }
        }
}

recipeBox.readRecipeData('./recipes.json', recipeBox.printRecipeCards);
