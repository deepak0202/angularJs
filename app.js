var app = angular.module("myApp", ["ui.router", "ngMaterial"]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/login');
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginController'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'homeController'
    })
    .state('home.dashboard', {
      url: '/dashboard',
      templateUrl: 'templates/dashboard.html',
      controller: 'homeController'
    });
}]);
