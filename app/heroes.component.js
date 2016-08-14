(function(app) {
  app.HeroesComponent =
    ng.core.Component({
      selector: 'my-heroes',
      templateUrl: 'app/heroes.component.html',
      styleUrls:  [ 'app/heroes.component.css' ],
      directives: [  ],
      providers: [app.HeroService]
    })
    .Class({
        constructor: [ ng.router.Router, app.HeroService, function(router, heroService) {
          this.router = router;
          this.heroService = heroService;
          this.selectedHero = null;
        }],
        ngOnInit: function(){
          this.getHeroes();
        },
        onSelect: function(hero){
          this.selectedHero = hero;
        },
        getHeroes: function() {
          this.heroService.getHeroes().then(heroes => this.heroes = heroes);
        },
        gotoDetail: function() {
          this.router.navigate(['/detail', this.selectedHero.id]);
        }
    });
})(window.app || (window.app = {}));