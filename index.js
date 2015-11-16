'use strict'

var transpose = require('music.kit/note/transpose')
var parse = require('music.kit/pitch/parse')
var rotate = require('music.kit/gamut/rotate')
var select = require('music.kit/gamut/select')
var type = require('music.kit/chord/type')

function s (n) { return n.split(' ') }
function h (n) { return s(n).map(parse) }
function name (n) { return n ? n.trim().toLowerCase() : n }
var SCALES = { major: h('1 2 3 4 5 6 7') }

function key () {
}

/**
 * @example
 * key.scale('C major') // => ['C', 'D', 'E', ...]
 */
key.scale = function (key) {
  var k = s(key)
  return (SCALES[name(k[1])] || []).map(transpose(k[0]))
}

function isFlat (a) { return a[0] < -1 }
function isSharp (a) { return a[0] > 5 }
function isAlt (i) { var a = parse(i); return isFlat(a) || isSharp(a) }
/**
 * @example
 * key.altered('F major') // => ['Bb']
 */
key.altered = function (k) {
  var notes = key.scale(k).filter(isAlt).sort(function (a, b) {
    return parse(a)[0] - parse(b)[0]
  })
  if (isFlat(parse(notes[0]))) notes.reverse()
  return notes
}

key.modes = function (k) {
  var s = key.scale(k)
  return s.map(function (n, i) {
    return rotate(i, s)
  })
}

/**
 * @name key.chords
 * @example
 * key.chords('C major') // => ['C', 'Dm', 'Em', 'F', 'G7', 'Am', 'Bo'
 * key.chords('major', false) // => ['C', 'Dm', ...]
 */
key.chords = function (k) {
  return key.modes(k).map(function (scale) {
    var chord = select('1 3 5 7', scale)
    return chord[0] + type(chord).replace('M', '')
  })
}

module.exports = key
