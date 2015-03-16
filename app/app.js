(function () {
  'use strict';

  var app = angular.module('CommentsApp', [
    //'event',
    'ngMaterial',
    'CommentsModule',
    'CommentForm',
    'PostBody'
  ])
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey')
    .accentPalette('light-blue');
  });

}());