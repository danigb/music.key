## `exports`

Get all modes of a key






## `exports`





### Examples

```js
key.altered('F major') // => ['Bb']
```



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


## `key.scale`





### Examples

```js
key.scale('C major') // => ['C', 'D', 'E', ...]
```
