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
  }

}

module.exports = Hero;