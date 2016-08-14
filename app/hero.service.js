(function(app) {
  app.HeroService =
    ng.core.Injectable()
    .Class({
      constructor: function() {
        /*this.getHeroesSlowly = function() {
          return new Promise<Array>(resolve =>
            setTimeout(() => resolve(app.HEROES), 2000) // 2 seconds
          );
        };*/
      },
      getHeroes: function() {
        return Promise.resolve(app.HEROES);
      },
      getHeroesSlowly: function() {
        // TODO:How use 'new Promise<Hero[]>' in ES5?
        return new Promise<app.Hero>(resolve =>
          setTimeout(() => resolve(app.HEROES), 2000) // 2 seconds
        );
      },
      getHero: function(id) {
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
      },
    });
})(window.app || (window.app = {}));