var vows = require('vows')
var assert = require('assert')
var key = require('..')

vows.describe('key.progression').addBatch({
  'progression of major': function () {
    assert.deepEqual(key.progression('ii V I', 'C major'),
      [ 'Dm', 'G7', 'CM' ])
    assert.deepEqual(key.progression('ii V I', 'Bb major'),
      [ 'Cm', 'F7', 'BbM' ])
  },
  'upper or lower case is irrelevant': function () {
    assert.deepEqual(key.progression('II V I', 'C major'), key.progression('ii v i', 'C major'))
  }
}).export(module)
