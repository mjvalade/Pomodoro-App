var $ = require('../jquery');

const Timer = {

  start: function(minutes){
    this.countdown(60, minutes);
  },

  minCountdown: function(minutes, seconds){
    if (minutes > 0){
      if (seconds === '0-1'){
        minutes--;
        $('#minutes').text(minutes);
        seconds = 60;
        this.countdown(seconds, minutes);
      }
    }
  },

  countdown: function(seconds, minutes){
    if(seconds >= 0){
      seconds--;
      if(seconds < 10){seconds = '0' + seconds;}
      $('#seconds').text(seconds);
      Timer.minCountdown(minutes, seconds);
      setTimeout(Timer.countdown, 1000, seconds, minutes);
    }
  },

  pause: function(){

  },

  alert: function(){

  }

};

module.exports = Timer;
