(function () {
    'use strict';

    var app = angular.module('CommentsApp2', ['ngMaterial']);
        app.config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('teal')
                .accentPalette('blue-grey');
        });

        app.controller('EventsCtrl', ['$mdDialog', function($mdDialog){
            this.date = new Date();
            function Makedialog(){
                return function(ev){
                    $mdDialog.show({
                        controller: 'NewEventController as newEvt',
                        templateUrl: './add-event.html',
                        targetEvent: ev

                    });
                };
            }
            this.showEventDialog = Makedialog();
        }]);

        app.controller('NewEventController', [function(){

        }]);

}());