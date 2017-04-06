var Task = function(description, difficulty, urgency, reward){
  this.description = description;
  this.difficulty = difficulty; 
  this.urgency = urgency; 
  this.reward = reward; 
  this.complete = false;
}

Task.prototype = {

  getDescription: function(){
    return this.description;
  },

  getDifficulty: function(){
    return this.difficulty;
  },

  getUrgency: function(){
    return this.urgency;
  }

}

module.exports = Task;