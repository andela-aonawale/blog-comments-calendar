/**
 * Created by ahmedOnawale on 3/19/15.
 */
angular.module('eventlist')
    .controller('EventListController', ['$mdDialog', 'MonthService', function($mdDialog, MonthService){
<<<<<<< HEAD
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
=======
        var eventList = this;

        eventList.currentMonth = MonthService.getCurrentMonth();
        eventList.currentDay = MonthService.getCurrentDay();

        function Makedialog(){
            return function(ev){
                $mdDialog.show({
                    controller: 'NewEventController as newEventCtrl',
                    templateUrl: './app/events-list/partials/add-event.html',
                    targetEvent: ev

                });
            };
        }

        eventList.events = MonthService.getEvents();
        eventList.currentDay = MonthService.getCurrentDay();
        eventList.Months = MonthService.getMonths();
        eventList.currentMonth = this.Months[MonthService.getCurrentMonth()];


        eventList.showEventDialog = Makedialog();

        eventList.goToEvent = function (eventID) {
            MonthService.goToEvent(eventList.currentMonth, eventList.currentDay, eventID);
        };

>>>>>>> develop
}]);