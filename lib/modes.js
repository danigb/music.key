'use strict'

var rotate = require('music.kit/gamut/rotate')
var scale = require('./scale')

/**
 * Get all modes of a key
 *
 */
module.exports = function (k) {
  var s = scale(k)
  return s.map(function (n, i) {
    return rotate(i, s)
  })
}
