var vows = require('vows')
var assert = require('assert')
var key = require('..')

vows.describe('key.signature').addBatch({
  'major': function () {
    assert.deepEqual(key.signature('F major'), ['Bb'])
    assert.deepEqual(key.signature('A major'), ['F#', 'C#', 'G#'])
    assert.deepEqual(key.signature('Eb major'), ['Bb', 'Eb', 'Ab'])
  }
}).export(module)
