var $ = require('../jquery');

const Settings = {

  workDefault: 25,

  breakDefault: 5,

  userSettingsArray: [],

  changeDefaults: function(wTime, bTime){
    this.workDefault = wTime;
    this.breakDefault = bTime;
    this.storeUserSettingsArray();
  },

  resetDefaults: function(){
    this.workDefault = 25;
    this.breakDefault = 5;
    this.storeUserSettingsArray();
  },

  storeUserSettingsArray: function() {
    this.userSettingsArray = [];
    this.userSettingsArray.push(this.workDefault);
    this.userSettingsArray.push(this.breakDefault);
    localStorage.setItem('userSettingsArray', JSON.stringify(this.userSettingsArray));
  },

  retrieveUserSettingsArray: function() {
    this.userSettingsArray = JSON.parse(localStorage.getItem('userSettingsArray'));
    this.updateTimerDisplay();
  },

  updateTimerDisplay: function() {
    $('#minutes').empty();
    this.workDefault = this.userSettingsArray[0];
    this.breakDefault = this.userSettingsArray[1];
  },

  pageLoad: function() {
    this.retrieveUserSettingsArray();
  }

};

$(document).ready(function() {
    Settings.pageLoad();
});


module.exports = Settings;
