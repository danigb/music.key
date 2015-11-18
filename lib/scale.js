'use strict'

var transpose = require('music.kit/note/transpose')
var key = require('./build')
var data = require('./scales.json')
var SCALES = Object.keys(data).reduce(function (o, name) {
  o[name] = data[name].split(' ')
  return o
}, {})

/**
 * @name key.scale
 * @function
 *
 * @example
 * key.scale('C major') // => ['C', 'D', 'E', ...]
 */
module.exports = function (name) {
  var k = key(name)
  return (SCALES[k[1]] || []).map(transpose(k[0]))
}
