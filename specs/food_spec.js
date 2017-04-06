var assert = require('assert')
var Food = require('../food.js')

describe('Food tests', function(){

  var food;

  beforeEach(function(){
    food = new Food('Cake', 20)
  });

  it('can return name', function(){
    assert.strictEqual('Cake', food.getName())
  })

  it('has replenishment value', function(){
    assert.strictEqual(20, food.getReplenishmentValue())
  });

})