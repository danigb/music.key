'use strict'

var transpose = require('music.kit/note/transpose')
var key = require('./parse')
var scales = require('./scales')

/**
 * @name key.scale
 * @function
 *
 * @example
 * key.scale('C major') // => ['C', 'D', 'E', ...]
 */
module.exports = function (name) {
  var k = key(name)
  return (scales[k[1]] || []).map(transpose(k[0]))
}
