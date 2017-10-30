const parsers = require('../../helpers/parsers'),
      assert = require('assert');

describe('parseHost', function(){
  it('parseHost', function() {
    assert.equal('huaban.com', parsers.parseHost('http://huaban.com/favorite/beauty/'));
  });
});

