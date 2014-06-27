module.exports = function (error, data) {
    var output = '\nYOUR RECIPE COLLECTION\n';
    if (error) throw error;
    
    data.forEach(function (recipeCard) {
        output += '\n' + recipeCard.title + '\n';
        
        // handle ingredients
        recipeCard.ingredients.forEach(function (item, index) {
            var unitPlural = item.unit + 's';
            
            // checks for specified units
            // if there is no unit specified, don't add 'of' (i.e. '1 whole chicken)
            var formatUnit = function(unit) {
                    if (unit !== '') {
                        output += ' of ';
                    }
                };
            
            output += '\t' + item.amount + ' ';
            
            if (item.amount > 1) {
                output += unitPlural;
                formatUnit(item.unit);
            } else {
                output += item.unit;
                formatUnit(item.unit);
            }
            
            output += item.ingredient + '\n';
        });
        
        // handle directions
        recipeCard.directions.forEach(function (item, index) {
            var unitPlural = item.unit + 's';
            output += (index + 1) + '. ' + item.direction;
            
            if (item.duration > 0) {
                output += ' for ' + item.duration + ' ' + item.unit;
            } else if (item.duration > 1) {
                output += ' for ' + item.duration + ' ' + unitPlural;
            }
            
            output += '\n';
        });
        
        // print recipe
        console.log(output);
    });
}