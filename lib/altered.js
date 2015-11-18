'use strict'

var parse = require('music.kit/pitch/parse')
var scale = require('./scale')

function isFlat (a) { return a[0] < -1 }
function isSharp (a) { return a[0] > 5 }
function isAlt (i) { var a = parse(i); return isFlat(a) || isSharp(a) }

/**
 * Get altered notes of a key
 *
 * @name key.altered
 * @function
 * @param {String} name - the key name
 * @return {Array} an array with al the altered notes ordered or an empty array
 * if its not a valid key name
 *
 * @example
 * key.altered('F major') // => ['Bb']
 * key.altered('Eb major') // => ['Bb', 'Eb', 'Ab']
 * key.altered('A major') // => ['F#', 'C#', 'G#']
 */
module.exports = function (k) {
  var notes = scale(k).filter(isAlt).sort(function (a, b) {
    return parse(a)[0] - parse(b)[0]
  })
  if (isFlat(parse(notes[0]))) notes.reverse()
  return notes
}
