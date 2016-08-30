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

Settings.pageLoad();

$menu.on('click', function(){
  $('ul').slideToggle('fast');
});

$submit.on('click', function(){
  Settings.changeDefaults($workMin.val(), $breakMin.val());
    Settings.pageLoad();
  // $('ul').slideToggle('fast'); TURN BACK ON BEFORE FINAL!!!!
});

$reset.on('click', function(){
  Settings.resetDefaults();
  Settings.pageLoad();
});

$start.on('click', function(){
  // toggleButton();
  currentTimer.timer.set();
  setTimeout(function tick(){
    if (!currentTimer.timer.isExpired && !currentTimer.timer.isPaused){
      currentTimer.timer.render($display);
      setTimeout(tick, 0);
    }
    if (currentTimer.timer.isExpired) {
      currentTimer.createTimer(currentTimer.timer.isWkClock, Settings.workDefault, Settings.breakDefault);
      currentTimer.timer.toggleCss();
      return $display.text(`${currentTimer.interval}:00`);
    }
  });
});

// $pause.on('click', function(){
//   timer.pause();
//   toggleButton();
//   var newInput = timer.timeRemaining;
//   timer = new Timer(newInput);
// });
