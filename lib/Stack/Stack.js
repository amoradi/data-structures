"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stack = void 0;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var Stack =
  /*#__PURE__*/
  (function() {
    function Stack() {
      _classCallCheck(this, Stack);

      _defineProperty(this, "items", void 0);

      _defineProperty(this, "count", void 0);

      this.items = {};
      this.count = 0;
    }

    _createClass(Stack, [
      {
        key: "returnUndefinedWhenEmpty",
        value: function returnUndefinedWhenEmpty() {
          if (this.isEmpty()) return undefined;
        }
      },
      {
        key: "isEmpty",
        value: function isEmpty() {
          return this.count === 0;
        }
      },
      {
        key: "size",
        value: function size() {
          return this.count;
        }
      },
      {
        key: "toString",
        value: function toString() {
          return JSON.stringify(this.items);
        }
      },
      {
        key: "push",
        value: function push(item) {
          this.items[this.count] = item;
          this.count++;
        }
      },
      {
        key: "pop",
        value: function pop() {
          this.returnUndefinedWhenEmpty();
          var top = this.items[this.count - 1];
          this.count--;
          delete this.items[this.count];
          return top;
        }
      },
      {
        key: "peek",
        value: function peek() {
          this.returnUndefinedWhenEmpty();

          if (this.count > 0) {
            return this.items[this.count - 1];
          }
        }
      }
    ]);

    return Stack;
  })();

exports.Stack = Stack;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGFjay9TdGFjay50cyJdLCJuYW1lcyI6WyJTdGFjayIsIml0ZW1zIiwiY291bnQiLCJpc0VtcHR5IiwidW5kZWZpbmVkIiwiSlNPTiIsInN0cmluZ2lmeSIsIml0ZW0iLCJyZXR1cm5VbmRlZmluZWRXaGVuRW1wdHkiLCJ0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQVdNQSxLOzs7QUFJSixtQkFBYztBQUFBOztBQUFBOztBQUFBOztBQUNaLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDRDs7OzsrQ0FFa0M7QUFDakMsVUFBSSxLQUFLQyxPQUFMLEVBQUosRUFBb0IsT0FBT0MsU0FBUDtBQUNyQjs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLRixLQUFMLEtBQWUsQ0FBdEI7QUFDRDs7OzJCQUVNO0FBQ0wsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7OzsrQkFFVTtBQUNULGFBQU9HLElBQUksQ0FBQ0MsU0FBTCxDQUFlLEtBQUtMLEtBQXBCLENBQVA7QUFDRDs7O3lCQUVJTSxJLEVBQVc7QUFDZCxXQUFLTixLQUFMLENBQVcsS0FBS0MsS0FBaEIsSUFBeUJLLElBQXpCO0FBQ0EsV0FBS0wsS0FBTDtBQUNEOzs7MEJBRUs7QUFDSixXQUFLTSx3QkFBTDtBQUVBLFVBQU1DLEdBQUcsR0FBRyxLQUFLUixLQUFMLENBQVcsS0FBS0MsS0FBTCxHQUFhLENBQXhCLENBQVo7QUFFQSxXQUFLQSxLQUFMO0FBQ0EsYUFBTyxLQUFLRCxLQUFMLENBQVcsS0FBS0MsS0FBaEIsQ0FBUDtBQUNBLGFBQU9PLEdBQVA7QUFDRDs7OzJCQUVNO0FBQ0wsV0FBS0Qsd0JBQUw7O0FBRUEsVUFBSSxLQUFLTixLQUFMLEdBQWEsQ0FBakIsRUFBb0I7QUFDbEIsZUFBTyxLQUFLRCxLQUFMLENBQVcsS0FBS0MsS0FBTCxHQUFhLENBQXhCLENBQVA7QUFDRDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsidHlwZSBJdGVtcyA9IHsgW2l0ZW06IG51bWJlcl06IGFueSB9O1xuXG5pbnRlcmZhY2UgU3RhY2tJbnRlcmZhY2Uge1xuICBpc0VtcHR5KCk6IGJvb2xlYW47XG4gIHNpemUoKTogbnVtYmVyO1xuICB0b1N0cmluZygpOiBzdHJpbmc7XG4gIHB1c2goaXRlbTogYW55KTogdm9pZDtcbiAgcG9wKCk6IGFueTtcbiAgcGVlaygpOiBhbnk7XG59XG5cbmNsYXNzIFN0YWNrIGltcGxlbWVudHMgU3RhY2tJbnRlcmZhY2Uge1xuICBwcml2YXRlIGl0ZW1zOiBJdGVtcztcbiAgcHJpdmF0ZSBjb3VudDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaXRlbXMgPSB7fTtcbiAgICB0aGlzLmNvdW50ID0gMDtcbiAgfVxuXG4gIHByaXZhdGUgcmV0dXJuVW5kZWZpbmVkV2hlbkVtcHR5KCkge1xuICAgIGlmICh0aGlzLmlzRW1wdHkoKSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlzRW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuY291bnQgPT09IDA7XG4gIH1cblxuICBzaXplKCkge1xuICAgIHJldHVybiB0aGlzLmNvdW50O1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuaXRlbXMpO1xuICB9XG4gIFxuICBwdXNoKGl0ZW06IGFueSkge1xuICAgIHRoaXMuaXRlbXNbdGhpcy5jb3VudF0gPSBpdGVtO1xuICAgIHRoaXMuY291bnQrKztcbiAgfVxuXG4gIHBvcCgpIHtcbiAgICB0aGlzLnJldHVyblVuZGVmaW5lZFdoZW5FbXB0eSgpO1xuXG4gICAgY29uc3QgdG9wID0gdGhpcy5pdGVtc1t0aGlzLmNvdW50IC0gMV07XG5cbiAgICB0aGlzLmNvdW50LS07XG4gICAgZGVsZXRlIHRoaXMuaXRlbXNbdGhpcy5jb3VudF1cbiAgICByZXR1cm4gdG9wO1xuICB9XG5cbiAgcGVlaygpIHtcbiAgICB0aGlzLnJldHVyblVuZGVmaW5lZFdoZW5FbXB0eSgpO1xuXG4gICAgaWYgKHRoaXMuY291bnQgPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5pdGVtc1t0aGlzLmNvdW50IC0gMV1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgU3RhY2sgfTtcbiJdfQ==
