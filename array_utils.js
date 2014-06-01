
(function(exports) {
  function init(context) {

    context = context || this;
    require('./namespace').namespace('Array.prototype', context);

    context.Array.prototype.find = function (fn) {
      for (var i = 0; i < this.length; ++i) {
        if (fn(this[i]))
          return this[i];
      }
      return null;
    };

    context.Array.prototype.addEach = function (k, v) {
      this.forEach(function (e) {
        e[k] = v;
      });
      return this;
    };

    context.Array.prototype.exists = function (fn) {
      for (var i = 0; i < this.length; ++i) if (fn(this[i])) return true;
      return false;
    };

    context.Array.prototype.forall = function (fn) {
      for (var i = 0; i < this.length; ++i) if (!fn(this[i])) return false;
      return true;
    };

    context.Array.prototype.sum = function () {
      return this.reduce(function (x, y) {
        return x + y;
      });
    };
  }

  init();

  exports.init = init;
})((typeof module !== 'undefined' && typeof module.exports !== 'undefined') ? module.exports : (this['array-utils'] = {}));
