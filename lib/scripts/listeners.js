var $ = require('../jquery');
const Settings = require('./settings');
const Timer = require('./timer');
const format = require('./formatTime');
const convertToMs = require('./convert');
const currentTimer = require('./current-timer');

let $menu = $('.menu-toggle');
let $wSlide = $('#slider-work');
let $bSlide = $('#slider-break');
let $workMin = $('#work-min');
let $breakMin = $('#break-min');
let $submit = $('.submit-button');
let $reset = $('.reset-default-button');
let $display = $('#countdown-display');
let $displayMin = $('#minutes');
let $start = $('#start-button');
let $controls = $('.controls-container');
let $pause = $('.pause');

function toggleButton(){
  var currentStatusOfPlayButton = $start.is(':hidden');
  $pause.toggle(currentStatusOfPlayButton);
  $start.toggle(!currentStatusOfPlayButton);
}

// When page loads
Settings.pageLoad();
// Settings.retrieveUserSettingsArray();
// $workMin.val(Settings.workDefault);
// $breakMin.val(Settings.breakDefault);
// $displayMin.text($workMin.val());
// currentTimer.createTimer();

$menu.on('click', function(){
  $('ul').slideToggle('fast');
});

$submit.on('click', function(){
  Settings.changeDefaults($workMin.val(), $breakMin.val());
  currentTimer.createTimer();
  $displayMin.text($workMin.val());

  // set new time values to localStorage
  // $('ul').slideToggle('fast'); TURN BACK ON!!!!

  //disable itself
  //enable reset button
  //write the new values to the input fields
  //write the new starting work time to the countdown field
});

$reset.on('click', function(){
  Settings.resetDefaults();
  $workMin.val(Settings.workDefault);
  $breakMin.val(Settings.breakDefault);
  $wSlide.val(Settings.workDefault);
  $bSlide.val(Settings.breakDefault);
  $displayMin.text($workMin.val());

  //disable itself when defaults are displayed
});

$start.on('click', function(){
  // toggleButton();
  currentTimer.timer.set();
  console.log(currentTimer.interval);
  setTimeout(function tick(){
    if (!currentTimer.timer.isExpired && !currentTimer.timer.isPaused){
      currentTimer.timer.render($display);
      setTimeout(tick, 0);
    }
    if (currentTimer.timer.isExpired) {
      currentTimer.createTimer(currentTimer.timer.isWkClock, Settings.workDefault, Settings.breakDefault);
    }
  });
  $displayMin.text(currentTimer.interval);
});

// $pause.on('click', function(){
//   timer.pause();
//   toggleButton();
//   var newInput = timer.timeRemaining;
//   timer = new Timer(newInput);
// });
