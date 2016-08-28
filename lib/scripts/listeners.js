var $ = require('../jquery');
const Settings = require('./settings');
const Timer = require('./timer');
const format = require('./formatTime');
const convertToMs = require('./convert');

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

var timer;

function setWorkTimer(){
  timer = new Timer(convertToMs(Settings.workDefault), 1);
}

function setBreakTimer(){
  timer = new Timer(convertToMs(Settings.breakDefault), 0);
}

Settings.retrieveUserSettingsArray();
$workMin.val(Settings.workDefault);
$breakMin.val(Settings.breakDefault);
$displayMin.text($workMin.val());
setWorkTimer();


$menu.on('click', function(){
  $('ul').slideToggle('fast');
});


$submit.on('click', function(){
  let wTime = parseInt($workMin.val());
  let bTime = parseInt($breakMin.val());
  Settings.changeDefaults(wTime, bTime);
  setWorkTimer();
  $displayMin.text($workMin.val());

  // set new time values to localStorage
  // $('ul').toggleClass('display'); TURN BACK ON

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

function toggleButton(){
  var currentStatusOfPlayButton = $start.is(':hidden');
  $pause.attr('hidden', currentStatusOfPlayButton);
  $start.attr('hidden', !currentStatusOfPlayButton);
}

$start.on('click', function(){
  toggleButton();
  timer.set();
  setTimeout(function tick(){
    if (!timer.isExpired){
      timer.run($display);
      setTimeout(tick, 0);}
    if (timer.isExpired) {
      toggleButton();
      if (timer.status===1){
        setBreakTimer();
      }else{
        setWorkTimer();
      }

    }
  });
});

// $pause.on('click', function(){
//   toggleButton();
//   var newInput = timer.timeRemaining;
//   timer = new Timer(newInput);
// });
