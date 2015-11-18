'use strict'

var itc = require('music.kit/notation/itc')
var keys = require('./keys.json')

module.exports = Object.keys(keys).reduce(function (o, name) {
  o[name] = keys[name]['s'].split(' ').map(itc)
  return o
}, {})
