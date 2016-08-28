class Timer {
  constructor(interval) {
   this.interval = interval;
   this.startTime = null;
  }

  start(time = Date.now()) {
   this.startTime = time;
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
