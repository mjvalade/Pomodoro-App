const assert = require('assert');
/* globals describe, it, context, browser */


describe('Submit Button', function(){
  it('should be able to grab the page title', function(){
    browser.url('/');
    var title = browser.getTitle();
    assert.equal(title, 'Tomato Pomodoro');
  });


describe('Settings Menu', function(){
  it('should show the settings menu when the menu button is clicked', function(){
    browser.url('/');
    browser.click('.menu-toggle');
    var val = browser.isExisting('.controls-container');
    assert.equal(val, true);
  });
  it('should dispay to 25 min by default', function(){
    browser.url('/');
    var text = browser.getText('#countdown-display')
    assert.equal(text, '25:00');
  });
  // it('reset button should set dispay to 25 min', function(){
  //   browser.url('/');
  //   browser.click('.menu-toggle');
  //   browser.element('.controls-container').waitForVisible(3000);
  //   browser.click('.reset-default-button');
  //   var text = browser.getText('#countdown-display')
  //   assert.equal(text, '25:00');
  // });
  });

});
