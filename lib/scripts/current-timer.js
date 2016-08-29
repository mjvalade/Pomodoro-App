const convertToMs = require('./convert');
const Settings = require('./settings');
const Timer = require('./timer');



module.exports = {
  timer: null,

  createTimer(status) {
    // let interval = status ? Settings.breakDefault : Settings.workDefault;
    let interval = 25;

    if (status) {
      interval = Settings.breakDefault;
    } else {
      interval = Settings.workDefault;
    }

    this.timer = new Timer(convertToMs(interval), !status);
  },

  // setWorkTimer() {
  //   this.timer = new Timer(convertToMs(Settings.workDefault), true);
  // },
  //
  // setBreakTimer() {
  //   this.timer = new Timer(convertToMs(Settings.breakDefault), false);
  // }
};
