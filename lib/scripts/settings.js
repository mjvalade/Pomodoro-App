var $ = require('../jquery');
const currentTimer = require('./current-timer');

const Settings = {

  workDefault: 25,

  breakDefault: 5,

  userSettingsArray: [],

  test: 30,

  returnTest: function(){return this.test;},

  changeDefaults: function(input1, input2){
    this.workDefault = parseInt(input1);
    this.breakDefault = parseInt(input2);
    this.storeUserSettingsArray();
  },

  resetDefaults: function(){
    this.workDefault = 25;
    this.breakDefault = 5;
    this.storeUserSettingsArray();
  },

  storeUserSettingsArray: function() {
    this.userSettingsArray = [this.workDefault, this.breakDefault];
    localStorage.setItem('userSettingsArray', JSON.stringify(this.userSettingsArray));
  },

  retrieveUserSettingsArray: function() {
    this.userSettingsArray = JSON.parse(localStorage.getItem('userSettingsArray'));
    this.updateTimerDisplay(this.userSettingsArray);
  },

  updateTimerDisplay: function(array) {
    $('#minutes').empty();
    [this.workDefault, this.breakDefault] = array;
  },

  pageLoad: function() {
    this.retrieveUserSettingsArray();
    $('#work-min').val(this.workDefault);
    $('#break-min').val(this.breakDefault);
    $('#slider-work').attr('value', this.workDefault);
    $('#slider-break').attr('value', this.breakDefault);
    $('#minutes').text($('#work-min').val());
    currentTimer.createTimer(false, this.workDefault, this.breakDefault);

  }
};
//
// $(document).ready(function() {
//     Settings.pageLoad();
// });


module.exports = Settings;
