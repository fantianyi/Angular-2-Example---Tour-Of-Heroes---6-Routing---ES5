(function(app) {
  app.HEROES = [
    new app.Hero({id: 11, name: 'Mr. Nice'}),
    new app.Hero({id: 12, name: 'Narco'}),
    new app.Hero({id: 13, name: 'Bombasto'}),
    new app.Hero({id: 14, name: 'Celeritas'}),
    new app.Hero({id: 15, name: 'Magneta'}),
    new app.Hero({id: 16, name: 'RubberMan'}),
    new app.Hero({id: 17, name: 'Dynama'}),
    new app.Hero({id: 18, name: 'Dr IQ'}),
    new app.Hero({id: 19, name: 'Magma'}),
    new app.Hero({id: 20, name: 'Tornado'})
  ];
})(window.app || (window.app = {}))