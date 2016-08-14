(function(app) {
  app.AppModule =
    ng.core.NgModule({
      imports: [ ng.platformBrowser.BrowserModule, ng.forms.FormsModule, ng.router.RouterModule, app.routing ],
      declarations: [ app.HeroDetailComponent, app.HeroesComponent, app.DashboardComponent, app.AppComponent ],
      bootstrap: [ app.AppComponent ]
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));