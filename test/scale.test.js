var vows = require('vows')
var assert = require('assert')
var key = require('..')

vows.describe('key.scale').addBatch({
  'major': function () {
    assert.deepEqual(key.scale('Bb major'), ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'])
    assert.deepEqual(key.scale('Bb ionian'), ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'])
    assert.deepEqual(key.scale('Bb lydian'), ['Bb', 'C', 'D', 'E', 'F', 'G', 'A'])
    assert.deepEqual(key.scale('Bb mixolydian'), ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'Ab'])
  },
  'minor': function () {
    assert.deepEqual(key.scale('D minor'), ['D', 'E', 'F', 'G', 'A', 'Bb', 'C'])
    assert.deepEqual(key.scale('D dorian'), ['D', 'E', 'F', 'G', 'A', 'B', 'C'])
    assert.deepEqual(key.scale('D phrygian'), ['D', 'Eb', 'F', 'G', 'A', 'Bb', 'C'])
    assert.deepEqual(key.scale('D aeolian'), ['D', 'E', 'F', 'G', 'A', 'Bb', 'C'])
    assert.deepEqual(key.scale('D locrian'), ['D', 'Eb', 'F', 'G', 'Ab', 'Bb', 'C'])
  }
}).export(module)
