const convertToMs = require('./convert');
// const Settings = require('./settings');
const Timer = require('./timer');

module.exports = {
  timer: null,

  interval: null,

  createTimer(status, option1, option2) {
    this.interval = status ? option2 : option1;
    this.timer = new Timer(convertToMs(this.interval), !status);
  },

  // setWorkTimer() {
  //   this.timer = new Timer(convertToMs(Settings.workDefault), true);
  // },
  //
  // setBreakTimer() {
  //   this.timer = new Timer(convertToMs(Settings.breakDefault), false);
  // }
};
