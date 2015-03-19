'use strict';

angular.module('calendar')
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

    register.goToEventList = function (dayID) {
      MonthService.goToEventList(register.selectedMonth, dayID);
    };

  }]);