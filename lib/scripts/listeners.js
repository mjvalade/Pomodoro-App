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

$(document).ready(function(){
  Settings.retrieveUserSettingsArray();
  $workMin.val(Settings.workDefault);
  $breakMin.val(Settings.breakDefault);
  $displayMin.text($workMin.val());
});

$menu.on('click', function(){
  $('ul').toggleClass('display');
});

$submit.on('click', function(){
  let wTime = parseInt($workMin.val());
  let bTime = parseInt($breakMin.val());
  // $workMin.val(Settings.workDefault);
  // $breakMin.val(Settings.breakDefault);
  $displayMin.text($workMin.val());
  Settings.changeDefaults(wTime, bTime);

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

$start.on('click', function(){
  var timer = new Timer(convertToMs(Settings.workDefault));
  timer.start();
  setTimeout(function tick() {
    if (!timer.isExpired){$display.text(format(timer.timeRemaining));}
    if (timer.isExpired){
      timer = new Timer(convertToMs(Settings.breakDefault));
      timer.start();}
    setTimeout(tick, 0);
  });
});
