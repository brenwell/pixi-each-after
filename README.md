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

### Basic usage

Pixi pause will automatically begin listening to visibilty changes as soon it required

```js
// common.js
require('pixi.js')
require('pixi-timeout')
const eachAfter = require('../lib/pixi-each-after').default

// es6 modules
import pixi from 'pixi.js'
import pixiTimeout from 'pixi-timeout'
import eachAfter = from 'pixi-each-after'
```

### EachAfter

[See each-after docs](https://github.com/brenwell/each-after)