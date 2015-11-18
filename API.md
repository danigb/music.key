## `key.altered`

Get altered notes of a key

### Parameters

* `name` **`String`** the key name


### Examples

```js
key.altered('F major') // => ['Bb']
key.altered('Eb major') // => ['Bb', 'Eb', 'Ab']
key.altered('A major') // => ['F#', 'C#', 'G#']
```

Returns `Array` an array with al the altered notes ordered or an empty array
if its not a valid key name


## `key.build`

Build a key from key name

### Parameters

* `name` **`String`** the key name


### Examples

```js
var key = require('music.key')
key('C major') // => ['C', 'major']
key('fx MINOR') // => ['F##', 'minor']
key('Ab mixolydian') // => ['Ab', 'mixolydian']
key('f bebop') // => 'null'
```

Returns `Array` an array with the tonic and mode or null if not valid key


## `key.chords`

Get chords of a key

### Parameters

* `name` **`String`** the key name


### Examples

```js
key.chords('C major') // => ['C', 'Dm', 'Em', 'F', 'G7', 'Am', 'Bo'
key.chords('major', false) // => ['C', 'Dm', ...]
```

Returns `Array` an array with the key chords


## `key.progression`

Get a chord progression from within a key

### Parameters

* `numerals` **`String or Array`** the roman numerals
* `key` **`String`** the key name





## `key.scale`





### Examples

```js
key.scale('C major') // => ['C', 'D', 'E', ...]
```



