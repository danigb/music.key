# music.key

[![Build Status](https://travis-ci.org/danigb/music.key.svg?branch=master)](https://travis-ci.org/danigb/music.key)
[![Test Coverage](https://codeclimate.com/github/danigb/music.key/badges/coverage.svg)](https://codeclimate.com/github/danigb/music.key/coverage)
[![Climate](https://codeclimate.com/github/danigb/music.key/badges/gpa.svg)](https://codeclimate.com/github/danigb/music.key)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm version](https://img.shields.io/npm/v/music.key.svg)](https://www.npmjs.com/package/music.key)
[![license](https://img.shields.io/npm/l/music.key.svg)](https://www.npmjs.com/package/music.key)
[![music.kit](https://img.shields.io/badge/music-kit-yellow.svg)](https://www.npmjs.com/package/music.kit)

`music.key` is a collection of functions to create and manipulate music keys:

```js
var key = require('music.key')
key('c# g# f#') // => ['major', 'A']
key.minor('A major') // => ['minor', 'F']
key.scale('A major') // => ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#']
key.chords('A major') // => ['A', 'Bm', 'C#m', 'D', 'E7', 'F#m', 'G#o']
```

This is part of [music.kit](https://github.com/danigb/music.kit)

## Installation

Not yet released.

## Documentation

[Generated documentation here](https://github.com/danigb/music.key/blob/master/API.md)

## License

MIT License
