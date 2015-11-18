## Work with music keys

You can require the module:

```js
var key = require('music.key')
```

This module is exposed in `music.kit` as `key`:

```js
var key = require('music.kit').key
```

#### Valid keys

A key in `music.key` is a string with a tonic and (optionally) a mode: `'C'`, `'C major'`,`'C minor'`,`'Ab dorian'` are valid keys. The recognized modes are: major, minor, dorian, phrygian, lydian, mixolydian, aeolian and locrian.

The key function parses the key and returns an array with the tonic and mode:

```js
key('C major') // => ['C', 'major']
key('C') // => ['C', 'major']
key('Cb dorian') // => ['Cb', 'dorian']
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

This function is not complete. Now you can do this:

```js
key.progression('II V I', 'C major') // => ['Dm', 'G7', 'CM']
```
