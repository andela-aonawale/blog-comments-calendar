(function () {
  'use strict';

  var app = angular.module('app', [
    'ngRoute',
    'ngMaterial',
    'calendar',
    'CommentsModule',
    'CommentForm',
    'event'
  ])
  .config(function ($routeProvider, $mdThemingProvider) {

    // Define routes for the application
    $routeProvider
      .when('/calendar', {
        templateUrl: './app/calendar/partials/calendar.partial.html',
        controller: 'MonthController',
        controllerAs: 'register'
      })
      .when('/calendar/:month_id/:day_id', {
        templateUrl: './app/events-list/partials/events-page.html',
        controller: 'EventController',
        controllerAs: 'eventList'
      })
      .when('/calendar/:month_id/:day_id/events/:event_id', {
        templateUrl: './app/comments/partials/comments.partial.html',
        controller: 'CommentsController',
        controllerAs: 'commentCtrl'
      })
      .otherwise({
        redirectTo: '/calendar'
      });

    // Create a theme for the application
    $mdThemingProvider.theme('default')
    .primaryPalette('teal')
    .accentPalette('light-blue');
  });

}());