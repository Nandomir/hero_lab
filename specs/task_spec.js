var assert = require('assert')
var Task = require('../task.js')
var Hero = require('../hero.js')

describe('Task tests', function(){

  var task;
  var hero;

  beforeEach(function(){
    task = new Task("Walk the dog", "Easy", "Now, really, right now, do it right now", "Sex");
    hero = new Hero('Winkelrod', 'Hagis');
  })

  it('check task name', function(){
    assert.strictEqual("Walk the dog", task.getDescription())
  })

  it('check can get difficulty', function(){
    assert.strictEqual("Easy", task.getDifficulty())
  })

  it('check can get urgency', function(){
    assert.strictEqual("Now, really, right now, do it right now", task.getUrgency())
  })

  it('check can get reward', function(){
    assert.strictEqual("Sex", task.getReward())
  })

  it('check can get completion', function(){
    assert.strictEqual(false, task.getCompletion())
  })


})