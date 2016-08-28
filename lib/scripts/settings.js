var $ = require('../jquery');

const Settings = {

  workDefault: 25,

  breakDefault: 5,


  changeDefaults: function(wTime, bTime){
    this.workDefault = wTime;
    this.breakDefault = bTime;
  },

  resetDefaults: function(){
    this.workDefault = 25;
    this.breakDefault = 5;
    
  },
};

module.exports = Settings;
