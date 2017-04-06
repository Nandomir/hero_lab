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

  eatFood: function(food){
    if(this.health + food.getReplenishmentValue() > 100){
      this.health = 100;
    }
      else {
        this.health += food.getReplenishmentValue()
      }
  }

}

module.exports = Hero;