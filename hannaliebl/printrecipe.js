printRecipeCards = function (error, data) {
    if (error) throw error;
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].title);
        for (var j = 0; j < data[i].ingredients.length; j++) {
            if (data[i].ingredients[j].amount > 1) data[i].ingredients[j].unit = data[i].ingredients[j].unit+'s';
            console.log((data[i].ingredients[j].amount)+' '+(data[i].ingredients[j].unit)+' '+(data[i].ingredients[j].ingredient));
        }
        for (var k = 0; k < data[i].directions.length; k++) {
            if (data[i].directions[k].duration === 0) data[i].directions[k].duration = '';
            console.log((data[i].directions[k].direction)+' '+(data[i].directions[k].duration)+' '+(data[i].directions[k].unit));
        }
    }
}

module.exports = printRecipeCards;