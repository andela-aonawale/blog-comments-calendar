/**
 * Created by ahmedOnawale on 3/19/15.
 */
angular.module('event')
    .controller('EventListCtrl', ['$mdDialog', function($mdDialog){
    this.date = new Date();
    function Makedialog(){
        return function(ev){
            $mdDialog.show({
                controller: 'NewEventController as newEventCtrl',
                templateUrl: '../partials/add-event.html',
                targetEvent: ev

            });
        };
    }
    this.showEventDialog = Makedialog();
}]);