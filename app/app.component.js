(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: `
        <h1>{{title}}</h1>
        <nav>
          <a routerLink="/dashboard">Dashboard</a>
          <a routerLink="/heroes">Heroes</a>
          <a routerLink="/detail">Detail</a>
        </nav>
        <router-outlet></router-outlet>
      `,
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