
(function(exports) {

  exports.namespace = function(ns, context) {

    ns.split('.').reduce(
          function(ctx, segment) {
            ctx[segment] = ctx[segment] || {};
            return ctx[segment];
          },
                context || this
    )
  };

})((typeof module !== 'undefined' && typeof module.exports !== 'undefined') ? module.exports : (this['./namespace'] = {}));
