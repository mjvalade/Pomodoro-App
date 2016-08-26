var $ = require('../jquery');

const Settings = {
  workDefault: 25,
  breakDefault: 5,
  changeDefaults: function(newW, newB){
    this.workDefault = newW;
    this.breakDefault = newB;
  },

  resetDefaults: function(){
    this.workDefault = 25;
    this.breakDefault = 5;
  }

  // outputUpdate: function(wk) {
  //   $('#work-min').val(wk);
  //   $('#break-min').val(wk);
  // }
};


module.exports = Settings;
