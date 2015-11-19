var vows = require('vows')
var assert = require('assert')
var parse = require('../lib/parse')

vows.describe('key.build').addBatch({
  'case agnostic': function () {
    assert.deepEqual(parse('C major'), ['C', 'major'])
    assert.deepEqual(parse('C Major'), ['C', 'major'])
    assert.deepEqual(parse('C MAJOR'), ['C', 'major'])
  },
  'tonics are normalized': function () {
    assert.deepEqual(parse('fx major'), ['F##', 'major'])
  },
  'major by default': function () {
    assert.deepEqual(parse('C'), ['C', 'major'])
  },
  'invalid name': function () {
    assert.deepEqual(parse('blah major'), null)
    assert.deepEqual(parse('blah'), null)
    assert.deepEqual(parse('C bebop'), null)
  }
}).export(module)
