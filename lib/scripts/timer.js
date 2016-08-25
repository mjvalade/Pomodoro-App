var $ = require('../jquery');

const Timer = {

  counter: 1,

  minutes: 25,

  totalMs: function() {
    return (60000 * this.minutes);
  },

  seconds: 60,


  startTimer: function(sandwich) {
    let moment = this.totalMs() - (Date.now() - sandwich);
    let logger = this.totalMs() - (this.counter * 1000);
    if (moment <= logger){
      this.counter++;
      let currentSec = Math.round(moment / 1000);
      this.seconds--;
      if(this.seconds < 10){this.seconds = '0' + this.seconds;}
      $('#seconds').text(this.seconds);
      if (currentSec % 60 === 0) {
        this.minutes--;
        $('#minutes').text(this.minutes);
        this.seconds = 60;
      }
    }
  },

  pause: function(){

  },

  alert: function(){

  }

};

module.exports = Timer;


// minCountdown: function(minutes, seconds){
//   if (minutes > 0){
//     if (seconds === '0-1'){
//       minutes--;
//       Timer.minutes = minutes;
//       $('#minutes').text(Timer.minutes);
//       this.start();
//     }
//   }
// },
//
// countdown: function(seconds, minutes){
//   if(seconds >= 0){
//     seconds--;
//     // if(seconds < 20 && minutes === 0){something happens to display here}
//     if(seconds < 10){seconds = '0' + seconds;}
//     Timer.seconds = seconds;
//     $('#seconds').text(Timer.seconds);
//     Timer.minCountdown(minutes, seconds);
//     setTimeout(Timer.countdown, 1000, seconds, minutes);
//   }
// },


// updateDisplay: function(element, value){
//   element.text()
// }
