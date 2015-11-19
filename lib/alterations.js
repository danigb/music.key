'use strict'

var relative = require('./relative')
var distance = require('music.kit/note/distance')
var itc = require('music.kit/notation/itc')

/**
 * Get the number of alterations of a key
 *
 * @name key.signature
 * @function
 * @param {String} name - the key name
 * @return {Integer} the number of alterations or null if not valid key
 *
 * @example
 * key.signature('C major') // => 0
 * key.signature('F major') // => -1
 * key.signature('Eb major') // => -3
 * key.signature('A major') // => 3
 * key.signature('nonsense') // => null
 */
module.exports = function (key) {
  var k = relative('major', key)
  return k ? itc(distance('C', k.split(' ')[0]))[0] : null
}
