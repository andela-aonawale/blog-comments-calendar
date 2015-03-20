/**
 * Created by ahmedOnawale on 3/19/15.
 */
angular.module('eventlist')
    .controller('EventListController', ['$mdDialog', 'MonthService', '$location', function($mdDialog, MonthService, $location){
    this.date = new Date();
    function Makedialog(){
        return function(ev){
            $mdDialog.show({
                controller: 'NewEventController as newEventCtrl',
                templateUrl: './app/events-list/partials/add-event.html',
                targetEvent: ev
            });
        };
    }
        this.events = MonthService.getEvents();
        this.currentDay = MonthService.getCurrentDay();
        this.Months = MonthService.getMonths();
        this.currentMonth = this.Months[MonthService.getCurrentMonth()];
        this.showEventDialog = Makedialog();

        this.toCalendar = function(){
            $location.path('calendar/');
        };
}]);