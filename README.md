# pixi-each-after

Pixi-each-after is a plugin for pixi.js which iterates through an array with an interval between each call. Additionally is comes with methods to stop & kill iteration.
This library wraps `each-after` with `pixi-timeout` as its custom timer. For usage information please see the [each-after docs](https://github.com/brenwell/each-after)

### Requirements

* [pixi.js](https://github.com/pixijs/pixi.js) >4.0.0
* [pixi-timeout](https://github.com/brenwell/pixi-timeout)

## Install

```shell
npm i pixi-each-after
```

## Usage

### Importing

#### common.js

```js
require('pixi.js')
require('pixi-timeout')
const eachAfter = require('../lib/pixi-each-after').default
```

#### es6 modules

```js
import pixi from 'pixi.js'
import pixiTimeout from 'pixi-timeout'
import eachAfter = from 'pixi-each-after'
```

### Basic usage

```js
const timerInstance = eachAfter(
    [2,4,9,16],     // an array to iterate over
    1,              // seconds between each iteration
    function(){}    // function to call on each iteration
)
```

### EachAfter

[See each-after docs](https://github.com/brenwell/each-after)