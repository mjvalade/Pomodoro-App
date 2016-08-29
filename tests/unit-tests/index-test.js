const assert = require('chai').assert;
const Settings = require('../../lib/scripts/settings.js');
const Timer = require('../../lib/scripts/timer.js');

describe('our test bundle', function () {
  it('should be connected', function () {
    assert(true);
  });
});

describe('Settings functions', function(){
  context('changeDefaults() functions', function () {
    it('should override the default work interval', function () {
      Settings.changeDefaults(30, 5);
      assert.equal(Settings.workDefault, 30);
    });
    it('should override the default break interval', function () {
      Settings.changeDefaults(30, 10);
      assert.equal(Settings.breakDefault, 10);
    });
  });

  context('resetDefaults() function', function () {
    it('reset work interval to 25', function () {
      Settings.workDefault = 30;
      Settings.resetDefaults();
      assert.equal(Settings.workDefault, 25);
    });
    it('reset break interval to 5', function () {
      Settings.breakDefault = 650;
      Settings.resetDefaults();
      assert.equal(Settings.breakDefault, 5);
    });
  });
});

describe('Timer functionality', function(){
  context('with constructor attributes', function () {
    it('should have a default startTime of null', function () {
      Timer.startTime = null;
      assert.equal(Timer.startTime, null);
    });
    it('should have a set() method to set startTime to Date.now()', function () {
      Timer.startTime = time;
      set(time = Date.now());
      

    });
    it.skip('should have a run() method to set startTime to Date.now()', function () {

    });

  });
});
