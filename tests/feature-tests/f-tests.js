const assert = require('assert');
/* globals describe, it, context, browser */


describe('Submit Button', function(){
  it('should be able to grab the page title', function(){
    browser.url('/');
    var title = browser.getTitle();
    assert.equal(title, 'Tomato Pomodoro');
  });
});
