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


})