const Settings = {
  workTime: 25,
  breakTime: 5,
  changeDefaults: function(newW, newB){
    this.workTime = newW;
    this.breakTime = newB;
  },

  resetDefaults: function(){
    this.workTime = 25;
    this.breakTime = 5;
  }
};


module.exports = Settings;
