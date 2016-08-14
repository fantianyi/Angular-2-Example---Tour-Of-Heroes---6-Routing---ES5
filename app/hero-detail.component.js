(function(app) {
  app.HeroDetailComponent =
    ng.core.Component({
      selector: 'my-hero-detail',
      templateUrl: 'app/hero-detail.component.html',
      styleUrls: [ 'app/hero-detail.component.css' ],
      providers: [ app.HeroService ]
    })
    .Class({
        constructor: [ ng.router.ActivatedRoute, app.HeroService, function(activatedRoute, heroService) {
          this.activatedRoute = activatedRoute;
          this.heroService = heroService;
          this.hero = null;
        }],
        ngOnInit: function() {
          // TODO: How use '=>' in ES5?
          this.activatedRoute.params.forEach((params) => {
            let id = +params['id'];
            this.heroService.getHero(id)
              .then(hero => this.hero = hero);
          });
        },
        goBack: function() {
          window.history.back();
        }
    });
})(window.app || (window.app = {}));