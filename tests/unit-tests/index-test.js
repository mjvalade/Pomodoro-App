const assert = require('chai').assert;
const Settings = require('../../lib/scripts/settings.js');
const Timer = require('../../lib/scripts/timer.js');

describe('our test bundle', function () {
  it('should work', function () {
    assert(true);
  });
});

describe('settings functions', function(){
  context('changeDefault functions', function () {
    it('should override the default work interval', function () {
      Settings.changeDefaults(30, 5);
      assert.equal(Settings.workTime, 30);
    });
    it('should override the default break interval', function () {
      Settings.changeDefaults(30, 10);
      assert.equal(Settings.breakTime, 10);
    });
  });

    context('reset defaults function', function () {
      it('reset work interval to 25', function () {
        Settings.workTime = 30;
        Settings.resetDefaults();
        assert.equal(Settings.workTime, 25);
      });
      it('reset break interval to 5', function () {
        Settings.breakTime = 650;
        Settings.resetDefaults();
        assert.equal(Settings.breakTime, 5);
      });
  });
});
