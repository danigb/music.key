'use strict'

var keys = require('./keys.json')
var note = require('music.kit/note/note')

/**
 * Build a key from key name
 *
 * @name key.build
 * @function
 * @param {String} name - the key name
 * @return {Array} an array with the tonic and mode or null if not valid key
 *
 * @example
 * var key = require('music.key')
 * key('C major') // => ['C', 'major']
 * key('fx MINOR') // => ['F##', 'minor']
 * key('Ab mixolydian') // => ['Ab', 'mixolydian']
 * key('f bebop') // => 'null'
 */
module.exports = function (name) {
  var s = name.split(' ')
  var t = note(s[0].trim())
  var n = s[1] ? s[1].trim().toLowerCase() : 'major'
  return t && keys[n] ? [t, n] : null
}
