var vows = require('vows')
var assert = require('assert')
var key = require('..')

vows.describe('key.chords').addBatch({
  'chords of major': function () {
    assert.deepEqual(key.chords('C major'),
      [ 'C', 'Dm', 'Em', 'F', 'G7', 'Am', 'Bo' ])
  }
}).export(module)
