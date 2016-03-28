angular.module('portfolioApp', [
  'ui.router'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'partials/partial-home.html',
        controller: 'homeController'
      })

      .state('about', {
        url: '/about',
        templateUrl: 'partials/partial-about.html',
        controller: 'aboutController'
      })

      .state('projects', {
        url: '/projects',
        templateUrl: 'partials/partial-projects.html',
        controller: 'projectsController'
      })

      .state('contact', {
        url: '/contact',
        templateUrl: 'partials/partial-contact.html',
        controller: 'contactController'
      })


  $locationProvider.html5Mode(true);
}]);