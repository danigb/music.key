var vows = require('vows')
var assert = require('assert')
var key = require('..')

vows.describe('key.altered').addBatch({
  'major': function () {
    assert.deepEqual(key.altered('F major'), ['Bb'])
    assert.deepEqual(key.altered('A major'), ['F#', 'C#', 'G#'])
    assert.deepEqual(key.altered('Eb major'), ['Bb', 'Eb', 'Ab'])
  }
}).export(module)
