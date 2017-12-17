/**
 * pixi-each-after is a plugin for pixi.js. which iterates through an array with an interval between each call. Stop & kill iteration.
 */

import eachAfterCreate from "each-after"

/**
 * Builds an each-after iterator using pixi-timeout
 */
function init(pixi)
{
    if (!pixi)
    {
        throw new Error("pixi was not found")
    }

    if (!pixi.setTimeout || !pixi.clearTimeout)
    {
        throw new Error("pixi-timeout was not found")
    }

    const eachAfter = eachAfterCreate({
        "set": pixi.setTimeout,
        "clear": pixi.clearTimeout
    })

    return eachAfter
}

export default init(window.PIXI)
