'use strict'

var parse = require('music.kit/pitch/parse')
var scale = require('./scale')

function isFlat (a) { return a[0] < -1 }
function isSharp (a) { return a[0] > 5 }
function isAlt (i) { var a = parse(i); return isFlat(a) || isSharp(a) }
/**
 * @example
 * key.altered('F major') // => ['Bb']
 */
module.exports = function (k) {
  var notes = scale(k).filter(isAlt).sort(function (a, b) {
    return parse(a)[0] - parse(b)[0]
  })
  if (isFlat(parse(notes[0]))) notes.reverse()
  return notes
}
