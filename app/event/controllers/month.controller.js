'use strict';

angular.module('event')
  .controller('MonthController', ['MonthService', '$mdDialog', '$scope', function (MonthService, $mdDialog, $scope) {
    MonthService.init();
    var register = this;

    register.months = MonthService.getMonths();

    register.selectedMonth = MonthService.getCurrentMonth();
    register.days = MonthService.getDays();

    $scope.$watch(angular.bind(register, function () {
      return register.selectedMonth;
    }), function (newValue, oldValue) {
      MonthService.setCurrentMonth(newValue);
      register.days = MonthService.getDays();
    });

    register.current = null;

    register.eventID = null;
    register.dayID = null;

    register.adding = true;
    register.editing = false;

    register.showEventModal = function (ev, dayID, eventID, editing, adding) {
      if (dayID) {
        MonthService.setCurrentMonth(register.selectedMonth);
        MonthService.setCurrentDay(dayID);
        $mdDialog.show({
          controller: 'DayController',
          controllerAs: 'register',
          templateUrl: './app/event/partials/new.event.partial.html',
          targetEvent: ev,
          locals: {
            currentEvent: eventID,
            editing: editing,
            adding: adding
          }
        })
        .then(function (answer) {

        },
        function () {

        });
      } else {
        return false;
      }
    };

  }]);