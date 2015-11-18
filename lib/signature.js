'use strict'

var parse = require('music.kit/pitch/parse')
var scale = require('./scale')

function isFlat (a) { return a[0] < -1 }
function isSharp (a) { return a[0] > 5 }
function isAlt (i) { var a = parse(i); return isFlat(a) || isSharp(a) }

/**
 * Get signature of a key: a list of altered notes in the appropriate order
 *
 * @name key.signature
 * @function
 * @param {String} name - the key name
 * @return {Array} an array with the altered notes ordered or an empty array
 * if its not a valid key name
 *
 * @example
 * key.signature('F major') // => ['Bb']
 * key.signature('Eb major') // => ['Bb', 'Eb', 'Ab']
 * key.signature('A major') // => ['F#', 'C#', 'G#']
 */
module.exports = function (k) {
  var notes = scale(k).filter(isAlt).sort(function (a, b) {
    return parse(a)[0] - parse(b)[0]
  })
  if (isFlat(parse(notes[0]))) notes.reverse()
  return notes
}
