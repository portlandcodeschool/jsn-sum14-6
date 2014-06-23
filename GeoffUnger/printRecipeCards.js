var printRecipeCards = function (error, data) {
    // this function should:
    // 1. Print the contents of data such that they look something like
    //    output-example.jpg
    // 2. if there is an error throw one
    if(error) throw (error);
    data.forEach(function(element, index){
        console.log(element.title);
        element.ingredients.forEach(function(element, index){
                console.log("        "+ element.amount + " " + element.unit + ((element.amount > 1) ? "s of " : " of ") + element.ingredient);
            }
        )
        element.directions.forEach(function(element,index){
            console.log((index+1) + ". " + element.direction);
        })
        console.log("\n\n");

    })
}

module.exports = printRecipeCards;