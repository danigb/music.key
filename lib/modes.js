'use strict'

var modes = require('music.kit/scale/modes')
var scale = require('./scale')

/**
 * Get all modes of a key
 *
 */
module.exports = function (k) { return modes(scale(k)) }
