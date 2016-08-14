(function(app) {
  app.Hero =
    ng.core.Class({
      constructor: function(param) {
        this.id = param.id;
        this.name = param.name;
      }
    });
})(window.app || (window.app = {}));