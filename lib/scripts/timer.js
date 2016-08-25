var $ = require('../jquery');

const Timer = {
  // origin: Date.now(),

  counter: 1,

  seconds: this.seconds || 5,

  minutes: this.minutes || 25,

  start: function(minutes){
    this.countdown(this.seconds, minutes);
  },

  startTimer: function(sandwich) {
    let moment = (60000 - (Date.now() - sandwich));
    let logger = 60000 - (this.counter * 1000);
    if (moment <= logger){
      this.counter++;
      console.log(Math.round(moment / 1000));
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
