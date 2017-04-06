var Hero = function(name, favouriteFood) {
  this.name = name;
  this.favouriteFood = favouriteFood;
  this.health = 100;
  this.tasks = [];
}


Hero.prototype = {

  getName: function() {
    return this.name;
  },

  getFavouriteFood: function() {
    return this.favouriteFood;
  },

  getHealth: function(){
    return this.health;
  },

  speak: function(){
    return "My name is " + this.name;
  },

  checkFavouriteFood: function(food){
    var multiplier = 1;
    if (food.name === this.favouriteFood.name) {
        multiplier = 1.5;
    }
    return multiplier;
  },

  eatFood: function(passedFood){
    var multiplier = this.checkFavouriteFood(passedFood);
    console.log(multiplier)

    var foodMultipliedValue = passedFood.getReplenishmentValue() * multiplier;

    if(this.health + foodMultipliedValue > 100){
      this.health = 100;
    }
      else {
        this.health += foodMultipliedValue
      }
  },

}

module.exports = Hero;