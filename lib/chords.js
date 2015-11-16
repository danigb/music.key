'use strict'

var modes = require('./modes')
var type = require('music.kit/chord/type')
var select = require('music.kit/gamut/select')

/**
 * Get chords of a key
 *
 * @name key.chords
 * @function
 * @param {String} name - the key name
 * @return {Array} an array with the key chords
 *
 * @example
 * key.chords('C major') // => ['C', 'Dm', 'Em', 'F', 'G7', 'Am', 'Bo'
 * key.chords('major', false) // => ['C', 'Dm', ...]
 */
module.exports = function (k) {
  return modes(k).map(function (scale) {
    var chord = select('1 3 5 7', scale)
    return chord[0] + type(chord).replace('M', '')
  })
}
