var assert = require('assert')
var Hero = require('../hero.js')
var Food = require('../food.js')

describe('Hero tests', function() {
  
  var hero;
  var food;

  beforeEach(function() {
    hero = new Hero('Winkelrod', 'Hagis')
    food = new Food('Cake', 20)
  });

  it('hero has a name', function() {
    assert.strictEqual('Winkelrod', hero.getName())
  });

  it('hero has favourite food', function() {
    assert.strictEqual('Hagis', hero.getFavouriteFood())
  });

  it('hero has health', function(){
    assert.strictEqual(100, hero.getHealth())
  })

  it('hero can say name', function(){
    assert.strictEqual('My name is Winkelrod', hero.speak())
  })

  it('hero has collection of tasks', function(){
    assert.strictEqual(0, hero.tasks.length)
  })

  it('hero can replenishment health', function(){
    hero.health -= 15;
    hero.eatFood(food)
    assert.strictEqual(100, hero.getHealth())
  })

  it('hero can replenishment health if health is low', function(){
    hero.health -= 60;
    hero.eatFood(food);
    assert.strictEqual(60, hero.getHealth())
  })

})