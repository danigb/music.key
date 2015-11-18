var vows = require('vows')
var assert = require('assert')
var key = require('..')

vows.describe('key.chords').addBatch({
  'chords of major': function () {
    assert.deepEqual(key.chords('C major'),
      [ 'CM', 'Dm', 'Em', 'FM', 'G7', 'Am', 'Bdim' ])
  }
}).export(module)
