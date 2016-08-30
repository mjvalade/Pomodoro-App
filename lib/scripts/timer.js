const format = require('./formatTime');
var $ = require('../jquery');
var warnAudio = new Audio('/sounds/gong-short.m4a');
var endAudio = new Audio('/sounds/gong-short.m4a');

// function toggleCss(val) {
//   if (val) {
//   $('#countdown-display').css({"color": "chartreuse", "font-size": "15em"});
//   } else {
//     $('#countdown-display').css({"color": "blanchedalmond", "font-size": "10em"});
//   }
// }
class Timer {
  constructor(interval, status) {
   this.interval = interval;
   this.startTime = null;
   this.paused = false;
   this.isWkTimer = status;
  }

  set() {
    this.startTime = Date.now();
  }

  render(element){
    if (!this.isExpired && !this.isPaused){
      element.text(format(this.timeRemaining));
    }
    this.endWarning();
    // this.ping();
  }

  pause(){
    this.paused = !this.paused;
  }

  endWarning() {
    let seconds = Math.floor(this.timeRemaining % 60000 / 1000);
    let minutes = Math.floor(this.timeRemaining / 60000);
    if (minutes === 0 && seconds <= 20) {
      this.toggleCss(true);
    }
    if (minutes === 0 && seconds <= 20 && seconds % 5 === 0) {
      warnAudio.play();
    }
    if (minutes === 0 && seconds === 0) {
      endAudio.play();
    }
  }

  get isPaused() {
    return this.paused;
  }

  get endTime() {
   if (!this.startTime) { return null; }
   return this.startTime + this.interval;
  }

  get timeRemaining() {
   return this.endTime - Date.now();
  }

  get isExpired() {
    return this.timeRemaining <= 0;
  }

  get isWkClock() {
    return this.isWkTimer;
  }

  toggleCss(val) {
    if (val) {
    $('#countdown-display').css({"color": "chartreuse", "font-size": "15em"});
    } else {
      $('#countdown-display').css({"color": "blanchedalmond", "font-size": "10em"});
    }
  }

}

module.exports = Timer;
