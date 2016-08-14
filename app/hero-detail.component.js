(function(app) {
  app.HeroDetailComponent =
    ng.core.Component({
      selector: 'my-hero-detail',
      templateUrl: 'app/hero-detail.component.html',
      providers: [ app.HeroService ]
    })
    .Class({
        constructor: [ app.HeroService, function(heroService) {
          this.heroService = heroService;
          this.hero = null;
        }],
        ngOnInit: function() {
          this.heroService.getHero(11).then(hero => this.hero = hero);
        },
        goBack: function() {
          window.history.back();
        }
    });
})(window.app || (window.app = {}));