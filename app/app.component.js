(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      templateUrl: 'app/app.component.html',
      styleUrls: [ 'app/app.component.css' ],
      directives: [ ng.router.ROUTER_DIRECTIVES ],
      providers: [app.HeroService]
    })
    .Class({
      constructor: [app.HeroService, function(heroService) {
        this.heroService = heroService;
        this.title = 'Tour of Heroes';
      }]
    });
})(window.app || (window.app = {}));