'use strict'

var split = require('music.kit/gamut/split')
var rtc = require('music.kit/notation/rtc')
var parse = require('./parse')
var chords = require('./chords')
var scales = require('./scales')

/**
 * Get a chord progression from within a key
 *
 * @name key.progression
 * @function
 * @param {String|Array} numerals - the roman numerals
 * @param {String} key - the key name
 */
module.exports = function (numerals, key) {
  var k = parse(key)
  if (!k) return null
  var s = scales[k[1]]
  var c = chords(key)
  var degrees = split(numerals).map(rtc)
  return degrees.map(function (d) {
    var i = indexOf(d[0], s)
    return i < 0 ? null : c[i]
  })
}

function indexOf (v, s) {
  for (var i = 0; i < 7; i++) {
    if (s[i][0] === v) return i
  }
  return -1
}
