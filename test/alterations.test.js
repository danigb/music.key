var vows = require('vows')
var assert = require('assert')
var key = require('..')

vows.describe('key.alterations').addBatch({
  'major': function () {
    assert.deepEqual(key.alterations('C major'), 0)
    assert.deepEqual(key.alterations('F major'), -1)
    assert.deepEqual(key.alterations('A major'), 3)
    assert.deepEqual(key.alterations('Eb major'), -3)
  },
  'modes': function () {
    assert.deepEqual(key.alterations('A minor'), 0)
  }
}).export(module)
