var vows = require('vows')
var assert = require('assert')
var key = require('..')

vows.describe('key.scale').addBatch({
  'major': function () {
    assert.deepEqual(key.scale('C major'), ['C', 'D', 'E', 'F', 'G', 'A', 'B'])
    assert.deepEqual(key.scale('D dorian'), ['D', 'E', 'F', 'G', 'A', 'B', 'C'])
  }
}).export(module)
