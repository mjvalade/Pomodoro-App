var $ = require('../jquery');

const Timer = {

  start: function(minutes){
    this.countdown(59, minutes);
  },

  minCountdown: function(minutes, seconds){
    if (minutes > 0){
      if (seconds===0){
        minutes--;
        $('#minutes').text(minutes);
        seconds = 59;
        this.countdown(seconds, minutes);
      }
    }
  },

  countdown: function(seconds, minutes){
    var that = this;
    if(seconds >= 0){
      $('#seconds').text(seconds);
      this.minCountdown(minutes, seconds);
      seconds--;
      setTimeout(that.countdown, 1000, seconds, minutes);
    }
  },

  pause: function(){

  },

  alert: function(){

  }

};

module.exports = Timer;
