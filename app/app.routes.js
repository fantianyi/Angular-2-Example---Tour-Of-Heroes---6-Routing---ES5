(function(app) {
  console.log(ng.router.Route);
  console.log(ng.router.RouterConfig);
  console.log(ng.router.RouteConfig);
  app.routing = ng.router.RouterModule.forRoot([
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: app.DashboardComponent},
    {path: 'heroes', component: app.HeroesComponent},
    {path: 'detail/:id', component: app.HeroDetailComponent}
  ]);
  console.log(app.routing);
})(window.app || (window.app = {}));