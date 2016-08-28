var $ = require('../jquery');
const Settings = require('./settings');
const Timer = require('./timer');
const format = require('./formatTime');
const convertToMs = require('./convert');

let $workInput = $('.work-input');
let $breakInput = $('.break-input');
let $submit = $('.submit-button');
let $toggler = $('.menu-toggle');
let $reset = $('.reset-default-button');
let $display = $('#countdown-display');
let $start = $('#start-button');

$(document).ready(function(){
  $workInput.val(Settings.workDefault);
  $breakInput.val(Settings.breakDefault);
});

$toggler.on('click', function(){
  //toggleMenu();
});

$submit.on('click', function(){
  let newW = parseInt($workInput);
  let newB = parseInt($breakInput);
  Settings.changeDefaults(newW, newB);
  //disable itself
  //enable reset button
  //toggleMenu();
  //write the new values to the input fields
  //write the new starting work time to the countdown field
});

$reset.on('click', function(){
  Settings.resetDefaults();
  //disable itself when defaults are displayed
  //write defaults to input fields
  //write the new starting work time to countdown field
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
