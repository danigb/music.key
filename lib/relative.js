'use strict'

var keys = require('./keys.json')
var parse = require('./build')
var transpose = require('music.kit/note/transpose')

/**
 * Get relative of a key
 *
 * @name key.signature
 * @function
 * @param {String} relative - the relative name
 * @param {String} key - the key name
 * @return {String} the relative key name or null if the key or the relative name is note valid
 *
 * @example
 * key.relative('minor', 'C major') // =>
 * key.relative('F major') // =>
 * key.relative('A major') // =>
 */
module.exports = function (relative, key) {
  var k = parse(key)
  var r = keys[relative]
  if (!k || !r) return null
  var tonicM = transpose(k[0], '-' + keys[k[1]]['m'])
  return transpose(tonicM, r['m']) + ' ' + relative
}
