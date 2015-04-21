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
      var unit = (item.unit ? item.unit : '');
      var duration = (item.duration ? item.duration : '');
      var preposition = (duration ? ' for ' : '');

      print(step + '. ' + item.direction + preposition + duration + ' ' +
            pluralize(unit, duration));

      step++;
    });

    print('\n');
  });
}

module.exports = printRecipeCards;
