var $ = require('../jquery');
const Settings = require('./settings');
const Timer = require('./timer');

let $workInput = $('.work-input');
let $breakInput = $('.break-input');
let $submit = $('.submit-button');
let $menu = $('.menu-toggle');
let $reset = $('.reset-default-button');
let $display = $('#countdown-display');
let $start = $('#start-button');
let $controls = $('.controls-container');

$(document).ready(function(){
  $workInput.val(Settings.workDefault);
  $breakInput.val(Settings.breakDefault);
});

$menu.on('click', function(){
  $('ul').toggleClass('display');
});

$submit.on('click', function(){
  let newW = parseInt($workInput);
  let newB = parseInt($breakInput);
  Settings.changeDefaults(newW, newB);
  $('ul').toggleClass('display');

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
  let origin = Date.now();
  requestAnimationFrame(function tick() {
    Timer.startTimer(origin);
      //clear screen
      //compare moment to %60 and round to nearest second
      //run a function that draws the moment to the screen?
    requestAnimationFrame(tick);
  });
});
