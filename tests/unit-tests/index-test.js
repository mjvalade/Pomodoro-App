const assert = require('chai').assert;
const changeDefault = require('../../lib/settings.js');

describe('our test bundle', function () {
  it('should work', function () {
    assert(true);
  });
});



describe('changeDefault()', function () {
  it('should reset the value of a variable', function () {
    var num = 20;
    console.log(changeDefault);
    var var2 = changeDefault(num);
    assert.equal(var2, 21);
  });
});
