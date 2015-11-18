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
key.fromNotes('c# g# a f#') // => ['A major', 'E major']
key.relative('minor', 'A major') // => 'F minor'
key.scale('A major') // => ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#']
key.chords('A major') // => ['A', 'Bm', 'C#m', 'D', 'E7', 'F#m', 'G#o']
```

This is part of [music.kit](https://github.com/danigb/music.kit)

## Installation

Not yet released.

## User guide

#### Valid keys

A key in `music.key` is a string with a tonic and (optionally) a mode: `'C'`, `'C major'`,`'C minor'`,`'Ab dorian'` are valid keys. The recognized modes are: major, minor, dorian, phrygian, lydian, mixolydian, aeolian and locrian.

The key function parses the key and returns an array with the tonic and mode:

```js
key('C major') // => ['C', 'major']
key('C') // => ['C', 'major']
key('Cb dorian') // => ['Cb', 'dorian']
```

#### Relative keys

You can get relative keys:

```js
key.relative('minor', 'C major') // => 'A minor'
```

This function can be partially applied:

```js
var minor = key.relative('minor')
minor('C major') // => 'A minor'
```

#### Get key signature

The key signature is the altered notes of the key in the appropriate order:

```js
key.signature('F major') // => ['Bb']
key.signature('Eb major') // => ['Bb', 'Eb', 'Ab']
key.signature('A major') // => ['F#', 'C#', 'G#']
```

### Get key scale and chords

This is pretty straightforward:

```js
key.scale('C major') // => ['C', 'D', 'E', 'F', 'G', 'A', 'B']
key.chords('C major') // => ['CM', 'Dm', 'Em', 'FM', 'G7', 'Am', 'Bdim']
```

#### Progressions

```js
key.progression('II V I', 'C major') // => ['Dm', 'G7', 'CM']
key.progression('II V I', 'C minor') // => ['Ddim', 'G7', 'Cm']
```

## Documentation

Read the [user guide](https://github.com/danigb/music.key/blob/master/GUIDE.md)
or the generated [API documentation](https://github.com/danigb/music.key/blob/master/API.md)

## License

MIT License
