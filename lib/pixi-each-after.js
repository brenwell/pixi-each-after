"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _eachAfter = _interopRequireDefault(require("each-after"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * pixi-each-after is a plugin for pixi.js. which iterates through an array with an interval between each call. Stop & kill iteration.
 */

/**
 * Builds an each-after iterator using pixi-timeout
 */
function init(pixi) {
  if (!pixi) {
    throw new Error("pixi was not found");
  }

  if (!pixi.setTimeout || !pixi.clearTimeout) {
    throw new Error("pixi-timeout was not found");
  }

  var eachAfter = (0, _eachAfter.default)({
    "set": pixi.setTimeout,
    "clear": pixi.clearTimeout
  });
  return eachAfter;
} // eslint-disable-next-line


var _default = init(PIXI);

exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQTs7OztBQUpBOzs7O0FBTUE7OztBQUdBLFNBQVMsSUFBVCxDQUFjLElBQWQsRUFDQTtBQUNJLE1BQUksQ0FBQyxJQUFMLEVBQ0E7QUFDSSxVQUFNLElBQUksS0FBSixDQUFVLG9CQUFWLENBQU47QUFDSDs7QUFFRCxNQUFJLENBQUMsS0FBSyxVQUFOLElBQW9CLENBQUMsS0FBSyxZQUE5QixFQUNBO0FBQ0ksVUFBTSxJQUFJLEtBQUosQ0FBVSw0QkFBVixDQUFOO0FBQ0g7O0FBRUQsTUFBTSxZQUFZLHdCQUFnQjtBQUM5QixXQUFPLEtBQUssVUFEa0I7QUFFOUIsYUFBUyxLQUFLO0FBRmdCLEdBQWhCLENBQWxCO0FBS0EsU0FBTyxTQUFQO0FBQ0gsQyxDQUVEOzs7ZUFDZSxLQUFLLElBQUwsQyIsImZpbGUiOiJwaXhpLWVhY2gtYWZ0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIHBpeGktZWFjaC1hZnRlciBpcyBhIHBsdWdpbiBmb3IgcGl4aS5qcy4gd2hpY2ggaXRlcmF0ZXMgdGhyb3VnaCBhbiBhcnJheSB3aXRoIGFuIGludGVydmFsIGJldHdlZW4gZWFjaCBjYWxsLiBTdG9wICYga2lsbCBpdGVyYXRpb24uXG4gKi9cblxuaW1wb3J0IGVhY2hBZnRlckNyZWF0ZSBmcm9tIFwiZWFjaC1hZnRlclwiXG5cbi8qKlxuICogQnVpbGRzIGFuIGVhY2gtYWZ0ZXIgaXRlcmF0b3IgdXNpbmcgcGl4aS10aW1lb3V0XG4gKi9cbmZ1bmN0aW9uIGluaXQocGl4aSlcbntcbiAgICBpZiAoIXBpeGkpXG4gICAge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwaXhpIHdhcyBub3QgZm91bmRcIilcbiAgICB9XG5cbiAgICBpZiAoIXBpeGkuc2V0VGltZW91dCB8fCAhcGl4aS5jbGVhclRpbWVvdXQpXG4gICAge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwaXhpLXRpbWVvdXQgd2FzIG5vdCBmb3VuZFwiKVxuICAgIH1cblxuICAgIGNvbnN0IGVhY2hBZnRlciA9IGVhY2hBZnRlckNyZWF0ZSh7XG4gICAgICAgIFwic2V0XCI6IHBpeGkuc2V0VGltZW91dCxcbiAgICAgICAgXCJjbGVhclwiOiBwaXhpLmNsZWFyVGltZW91dFxuICAgIH0pXG5cbiAgICByZXR1cm4gZWFjaEFmdGVyXG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuZXhwb3J0IGRlZmF1bHQgaW5pdChQSVhJKVxuIl19