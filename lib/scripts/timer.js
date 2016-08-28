const format = require('./formatTime');
var $ = require('../jquery');

class Timer {
  constructor(interval, status) {
   this.interval = interval;
   this.startTime = null;
   this.paused = false;
   this.status = status;
  }

  set(time = Date.now()) {
   this.startTime = time;
  }

  run(element){
    if (!this.isExpired && !this.isPaused){
      element.text(format(this.timeRemaining));
    }
  }

  pause(){
    this.paused = !this.paused;
  }

  get isPaused() {
    if (this.paused === true){return true;}
  }

  get endTime() {
   if (!this.startTime) { return null; }
   return this.startTime + this.interval;
  }

  get timeRemaining() {
   return this.endTime - Date.now();
  }

  get isExpired() {
    if (this.timeRemaining <= 0){return true;}
  }
}

module.exports = Timer;
