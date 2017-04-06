var Food = function(name, replenishment) {
  this.name = name;
  this.replenishment = replenishment;
}

Food.prototype = {

  getName: function() {
    return this.name;
  },

  getReplenishmentValue: function() {
    return this.replenishment;
  }

}


module.exports = Food;