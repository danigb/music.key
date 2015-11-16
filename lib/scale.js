'use strict'

var parse = require('music.kit/pitch/parse')
var transpose = require('music.kit/note/transpose')
var key = require('./build')
var SCALES = { major: h('1 2 3 4 5 6 7') }
function s (n) { return n.split(' ') }
function h (n) { return s(n).map(parse) }

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
