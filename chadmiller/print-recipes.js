function print(msg) {
  console.log(msg);
}

function pluralize(str, num) {
  if (num > 1)
    return str + 's';
  return str;
}

function printRecipeCards(error, data) {
  if (error)
    throw new Error(error);

  print('YOUR RECIPE COLLECTION\n');

  data.forEach(function(recipe) {

    print(recipe.title);

    recipe.ingredients.forEach(function(item) {
      print('\t' + item.amount + ' ' + pluralize(item.unit, item.amount) +
            ' of ' + item.ingredient);
    });

    print('');

    var step = 1;
    recipe.directions.forEach(function(item) {
      print(step + '. ' + item.direction);
      step++;
    });

    print('\n');
  });
}

module.exports = printRecipeCards;
