'use strict'

var names = require('./scales.json')

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
  if (!names[s[1]]) return []
  return s
}
