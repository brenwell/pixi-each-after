# pixi-pause

pixi-pause is a pixi.js plugin which automatically pauses and resumes your `PIXI.Application` when the browser windows visibilty is changed.


## Intall

```shell
npm i pixi-pause
```

## Usage

### Basic usage

Pixi pause will automatically begin listening to visibilty changes as soon it required

```js
// common.js
require('pixi.js')
require('pixi-pause.js')

// es6 modules
import pixi from 'pixi.js'
import pixiPause from 'pixi-pause.js'
```

### Disable

**pixi-pause** will be enabled by default. But occassionaly it is import to disable the automatic pausing and resuming.

```js
// disable
PIXI.autoPause = false

// enable
PIXI.autoPause = true
```
