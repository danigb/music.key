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



## `key.signature`

Get signature of a key: a list of altered notes in the appropriate order

### Parameters

* `name` **`String`** the key name


### Examples

```js
key.signature('F major') // => ['Bb']
key.signature('Eb major') // => ['Bb', 'Eb', 'Ab']
key.signature('A major') // => ['F#', 'C#', 'G#']
```

Returns `Array` an array with the altered notes ordered or an empty array
if its not a valid key name


## `key.signature`

Get relative of a key

### Parameters

* `relative` **`String`** the relative name
* `key` **`String`** the key name


### Examples

```js
key.relative('minor', 'C major') // =>
key.relative('F major') // =>
key.relative('A major') // =>
```

Returns `String` the relative key name or null if the key or the relative name is note valid


