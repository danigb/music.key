var vows = require('vows')
var assert = require('assert')
var key = require('..')

vows.describe('key.build').addBatch({
  'build key from name': function () {
    assert.deepEqual(key('C major'), ['C', 'major'])
  },
  'invalid name': function () {
    assert.deepEqual(key('C bebop'), [])
  }
}).export(module)
