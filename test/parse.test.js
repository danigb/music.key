var vows = require('vows')
var assert = require('assert')
var parse = require('../lib/parse')

vows.describe('key.build').addBatch({
  'case agnostic': function () {
    assert.deepEqual(parse('C major'), { tonic: 'C', mode: 'major', dist: 1 })
    assert.deepEqual(parse('C Major'), { tonic: 'C', mode: 'major', dist: 1 })
    assert.deepEqual(parse('C MAJOR'), { tonic: 'C', mode: 'major', dist: 1 })
  },
  'tonics are normalized': function () {
    assert.deepEqual(parse('fx major'), { tonic: 'F##', mode: 'major', dist: 1 })
  },
  'major by default': function () {
    assert.deepEqual(parse('C'), { tonic: 'C', mode: 'major', dist: 1 })
  },
  'without tonic': function () {
    assert.deepEqual(parse('major'), { tonic: false, mode: 'major', dist: 1 })
    assert.deepEqual(parse('DORIAN'), { tonic: false, mode: 'dorian', dist: 2 })
  },
  'invalid name': function () {
    assert.deepEqual(parse('blah major'), null)
    assert.deepEqual(parse('blah'), null)
    assert.deepEqual(parse('C bebop'), null)
    assert.deepEqual(parse(), null)
  }
}).export(module)
