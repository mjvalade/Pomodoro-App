var $ = require('../jquery');
const Settings = require('./settings');

let $workInput = $('.work-input');
let $breakInput = $('.break-input');
let $submit = $('.submit-button');
let $reset = $('.reset-default-button');
let $display = $('#countdown-display');
let $start = $('#start-button');

$(document).ready(function(){
  $workInput.val(Settings.workTime);
  $breakInput.val(Settings.breakTime);
});

$submit.on('click', function(){
  let newW = parseInt($workInput);
  let newB = parseInt($breakInput);
  Settings.changeDefaults(newW, newB);
});
