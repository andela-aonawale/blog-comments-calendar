'use strict';

angular.module('event')
  .controller('DayController', ['MonthService', 'currentEvent', 'editing', 'adding', '$scope', function (MonthService, currentEvent, editing, adding, $scope) {
    var register = this;

    register.selectedMonth = MonthService.getCurrentMonth();
    register.eventID = currentEvent;

    register.adding = true;
    register.editing = false;

    register.months = MonthService.getMonths();
    register.events = MonthService.getEvents();

    register.prepareEdit = function (eventID, eventData) {
      register.editing = true;
      register.adding = false;
      register.newEvent = eventData;
      register.eventID = eventID;
    };

    // Add an event
    register.addEvent = function (eventData) {
      var newEvent = {};
      newEvent.title = eventData.title;

      MonthService.addEvent(newEvent);
    };

    register.saveEvent = function (newEventData) {
      var editedEvent = {};
      editedEvent.title = newEventData.title;

      MonthService.saveEvent(register.selectedMonth, register.dayID, register.eventID, editedEvent);

      register.editing = false;
      register.adding = true;
    };

    register.removeEvent = function (eventID) {
      MonthService.removeEvent(eventID);
    };

  }]);