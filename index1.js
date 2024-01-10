let section1=document.getElementById('#hero')
let section2=document.getElementById('#featured-recipes')
let section3=document.getElementById('##recipe-details')





function generateID() {
    var count = 0;
    return function () {
      return count++;
    };
  }
  var id = generateID();
function food(name,category){
    return{
        id:id(),
        name:name,
        category
    }
}
function Food(){
    var foood={}
    foood.showRecipeDetails=showRecipeDetails
    foood.hideRecipeDetails=hideRecipeDetails
    return food
}

function showRecipeDetails(){

}

function hideRecipeDetails(){
    
}