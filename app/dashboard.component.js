(function(app) {
  app.DashboardComponent =
    ng.core.Component({
      selector: 'my-dashboard',
      templateUrl: 'app/dashboard.component.html',
      providers: [ app.HeroService ]
    })
    .Class({
        constructor: [ app.HeroService, function(heroService) {
          this.heroService = heroService;
        }],
        ngOnInit: function() {
          this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
        },
        gotoDetail: function(hero) {
          // TODO: How use 'ng.router.Router' in ES5?
          //let link = ['/detail', hero.id];
          //this.router.navigate(link);
        }
    });
})(window.app || (window.app = {}));