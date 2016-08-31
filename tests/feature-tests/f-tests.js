const assert = require('assert');

describe('Submit Button', function(){
  it('should be able to grab the page title', function(){
    window.browser.url('/');
    var title = window.browser.getTitle();
    assert.equal(title, 'Tomato Pomodoro');
  });
});
