'use strict'

var split = require('music.kit/gamut/split')
var select = require('music.kit/gamut/select')
var chords = require('./chords')

var DEG = {I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6, VII: 7}

/**
 * Get a chord progression from within a key
 *
 * @name key.progression
 * @function
 * @param {String|Array} numerals - the roman numerals
 * @param {String} key - the key name
 */
module.exports = function (numerals, key) {
  var degrees = split(numerals).map(function (n) {
    return DEG[n.toUpperCase()]
  })
  return select(degrees, chords(key))
}
