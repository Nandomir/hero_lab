var assert = require('assert')
var Hero = require('../hero.js')

describe('Hero tests', function() {
  
  var hero;

  beforeEach(function() {
    hero = new Hero('Winkelrod', 'Hagis')

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


})