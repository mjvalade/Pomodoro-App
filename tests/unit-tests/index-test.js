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

  context('storeUserSettingsArray', function () {

    var storedLocalStorage;

    beforeEach(function () {
      storedLocalStorage = localStorage;
      localStorage = {
        storedItems: {},
        getItem(name) { return this.storedItems[name]; },
        setItem(name, data) { this.storedItems[name] = data; }
      };
    });

    afterEach(function () {
      localStorage = storedLocalStorage;
    });

    it('stores the work and break defaults in localStorage', function () {
      Settings.workDefault = 30;
      Settings.breakDefault = 6;
      Settings.storeUserSettingsArray();

      assert.equal(localStorage.getItem('userSettingsArray'), JSON.stringify(Settings.userSettingsArray));
    });

  });

  context('updateTimerDisplay() function', function () {
    it('update the timer display', function () {
      var settingsArray = [35, 8];
      Settings.updateTimerDisplay(settingsArray);

      assert.equal(Settings.workDefault, 35);
      assert.equal(Settings.breakDefault, 8);
    });
  });
});

describe('Timer functionality', function(){
  context('with constructor attributes', function () {
    it('should have a default startTime of null', function () {
      assert.equal(Timer.startTime, null);
    });

    it('should have a set() method to set startTime to Date.now()', function () {
      var timer = new Timer(30, true);
      timer.set();

      assert.equal(timer.startTime, Date.now());

    });
    it('should have a pause() method to pause the timer', function () {
      var timer = new Timer(30, true);
      
      assert.equal(timer.paused, false);
      timer.pause();
      assert.equal(timer.paused, true);
      timer.pause();
      assert.equal(timer.paused, false);
    });

  });
});
