const format = require('./formatTime');
var $ = require('../jquery');

class Timer {
  constructor(interval, status) {
   this.interval = interval;
   this.startTime = null;
   this.paused = false;
   this.isWkTimer = status;
  }

  set(time = Date.now()) {
   this.startTime = time;
  }

  render(element){
    if (!this.isExpired && !this.isPaused){
      element.text(format(this.timeRemaining));
    }
  }

  pause(){
    this.paused = !this.paused;
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

}

module.exports = Timer;
