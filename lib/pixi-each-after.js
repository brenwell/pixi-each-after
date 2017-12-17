"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _eachAfter = _interopRequireDefault(require("each-after"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * PIXI-each-after is a plugin for PIXI.js. which iterates through an array with an interval between each call. Stop & kill iteration.
 */
function init() {
  if (!PIXI) {
    throw new Error("PIXI was not found");
  }

  if (!PIXI.ticker || !PIXI.ticker.shared) {
    throw new Error("PIXI.ticker was not found");
  }

  if (!PIXI.setTimeout || !PIXI.clearTimeout) {
    throw new Error("pixi-timeout was not found");
  }

  var eachAfter = (0, _eachAfter.default)({
    "set": PIXI.setTimeout,
    "clear": PIXI.clearTimeout
  });
  return eachAfter;
}

var _default = init();

exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQTs7OztBQUpBOzs7QUFNQSxTQUFTLElBQVQsR0FDQTtBQUNJLE1BQUksQ0FBQyxJQUFMLEVBQ0E7QUFDSSxVQUFNLElBQUksS0FBSixDQUFVLG9CQUFWLENBQU47QUFDSDs7QUFFRCxNQUFJLENBQUMsS0FBSyxNQUFOLElBQWdCLENBQUMsS0FBSyxNQUFMLENBQVksTUFBakMsRUFDQTtBQUNJLFVBQU0sSUFBSSxLQUFKLENBQVUsMkJBQVYsQ0FBTjtBQUNIOztBQUVELE1BQUksQ0FBQyxLQUFLLFVBQU4sSUFBb0IsQ0FBQyxLQUFLLFlBQTlCLEVBQ0E7QUFDSSxVQUFNLElBQUksS0FBSixDQUFVLDRCQUFWLENBQU47QUFDSDs7QUFFRCxNQUFNLFlBQVksd0JBQWdCO0FBQzlCLFdBQU8sS0FBSyxVQURrQjtBQUU5QixhQUFTLEtBQUs7QUFGZ0IsR0FBaEIsQ0FBbEI7QUFLQSxTQUFPLFNBQVA7QUFDSDs7ZUFFYyxNIiwiZmlsZSI6InBpeGktZWFjaC1hZnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUElYSS1lYWNoLWFmdGVyIGlzIGEgcGx1Z2luIGZvciBQSVhJLmpzLiB3aGljaCBpdGVyYXRlcyB0aHJvdWdoIGFuIGFycmF5IHdpdGggYW4gaW50ZXJ2YWwgYmV0d2VlbiBlYWNoIGNhbGwuIFN0b3AgJiBraWxsIGl0ZXJhdGlvbi5cbiAqL1xuXG5pbXBvcnQgRWFjaEFmdGVyQ3JlYXRlIGZyb20gXCJlYWNoLWFmdGVyXCJcblxuZnVuY3Rpb24gaW5pdCgpXG57XG4gICAgaWYgKCFQSVhJKVxuICAgIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUElYSSB3YXMgbm90IGZvdW5kXCIpXG4gICAgfVxuXG4gICAgaWYgKCFQSVhJLnRpY2tlciB8fCAhUElYSS50aWNrZXIuc2hhcmVkKVxuICAgIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUElYSS50aWNrZXIgd2FzIG5vdCBmb3VuZFwiKVxuICAgIH1cblxuICAgIGlmICghUElYSS5zZXRUaW1lb3V0IHx8ICFQSVhJLmNsZWFyVGltZW91dClcbiAgICB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInBpeGktdGltZW91dCB3YXMgbm90IGZvdW5kXCIpXG4gICAgfVxuXG4gICAgY29uc3QgZWFjaEFmdGVyID0gRWFjaEFmdGVyQ3JlYXRlKHtcbiAgICAgICAgXCJzZXRcIjogUElYSS5zZXRUaW1lb3V0LFxuICAgICAgICBcImNsZWFyXCI6IFBJWEkuY2xlYXJUaW1lb3V0XG4gICAgfSlcblxuICAgIHJldHVybiBlYWNoQWZ0ZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdCgpXG4iXX0=