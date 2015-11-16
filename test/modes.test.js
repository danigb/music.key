var vows = require('vows')
var assert = require('assert')
var key = require('..')

vows.describe('key.modes').addBatch({
  'major': function () {
    assert.deepEqual(key.modes('C major'), [
      [ 'C', 'D', 'E', 'F', 'G', 'A', 'B' ],
      [ 'D', 'E', 'F', 'G', 'A', 'B', 'C' ],
      [ 'E', 'F', 'G', 'A', 'B', 'C', 'D' ],
      [ 'F', 'G', 'A', 'B', 'C', 'D', 'E' ],
      [ 'G', 'A', 'B', 'C', 'D', 'E', 'F' ],
      [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ],
      [ 'B', 'C', 'D', 'E', 'F', 'G', 'A' ]])
  }
}).export(module)
