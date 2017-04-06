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
  },

  getReward: function(){
    return this.reward;
  },

  getCompletion: function(){
    return this.complete;
  },

  completeTask: function(){
    this.complete = true;
  }



}

module.exports = Task;