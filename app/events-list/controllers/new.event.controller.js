/**
 * Created by ahmedOnawale on 3/19/15.
 */
angular.module('eventlist')
.controller('NewEventController', ['MonthService' ,function(MonthService){
        var form = this;
        form.event = {};
        form.addEvent = function(eventData){
            var newEvent = {};
            newEvent.title = eventData.title;
            newEvent.author = eventData.author;
            newEvent.description = eventData.description;
            MonthService.addEvent(newEvent);
        }

    }]);