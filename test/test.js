const sinon = require('sinon')
const assert = require('chai').assert

// mock the window & canvas
require('jsdom-global')()
require('canvas-prebuilt')

require('pixi.js')
require('pixi-timeout')
const eachAfter = require('../lib/pixi-each-after').default

console.log(eachAfter)

describe('Creation', () => {

    it('Should create a timer object', () => {
        const onEachHandler = () => {}
        const onCompleteHandler = () => {}
        const timerInstance = eachAfter([],1,onEachHandler,onCompleteHandler)
        assert.isObject(timerInstance)
        assert.property(timerInstance, 'stop')
        assert.property(timerInstance, 'kill')
        assert.property(timerInstance, 'setInterval')
        assert.property(timerInstance, 'interval')
    });
});
