angular.module('calendar')
  .factory('MonthService', ['$http', '$localStorage', '$location', function ($http, $localStorage, $location) {

  return {
    // covered
    today: null,

    // covered
    init: function () {
      this.today = moment();
      if (!$localStorage.calendar) {
        $localStorage.calendar = {};
        $localStorage.calendar[this.today.month()] = this.setDays(this.today.month());
      }
    },

    // covered
    getMonths: function () {
      return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    },

    getDays: function () {
      if (!$localStorage.calendar[this.getCurrentMonth()]) {
        $localStorage.calendar[this.getCurrentMonth()] = this.setDays(this.getCurrentMonth());
      }
      return $localStorage.calendar[this.getCurrentMonth()];
    },

    getEvents: function () {
      return $localStorage.calendar[this.getCurrentMonth()][this.getDayIndex()].events;
    },

    setDays: function (currentMonth) {
      this.setCurrentMonth(currentMonth);
      var i = 0; // initial value for month initializer loop
      var j = 0; // initial index for months population loop
      var numberOfDays = 42; // the number of days for each month's render
      var days = [];

      // Generate an array of empty days.
      for (i; i < numberOfDays; i++) {
        var day = {
          id: null,
          events: [
          ]
        };

        days.push(day);
      }

      // Get the day of the week of the first day of the current month
      var firstDayOffset = this.today.startOf('month').weekday();

      // Get the number of days in the month
      var dayCount = this.today.daysInMonth();

      for (j = firstDayOffset; j < dayCount + firstDayOffset; j++ ) {
        days[j].id = 1 + j - firstDayOffset;
      }

      return days;
    },

    addEvent: function (eventData) {
      $localStorage.calendar[this.getCurrentMonth()][this.getDayIndex()].events.push(eventData);
    },

    saveEvent: function (monthID, dayID, eventID, eventData) {
      $localStorage.calendar[monthID].days[dayID].events[eventID] = eventData;
    },

    removeEvent: function (eventID) {
      $localStorage.calendar[this.getCurrentMonth()][this.getDayIndex()].events.splice(eventID, 1);

    },

    getFirstDayID: function () {
      return this.today.startOf('month').weekday();
    },

    getCurrentMonth: function () {
      return this.today.month();
    },

    setCurrentMonth: function (monthID) {
      this.today.set('month', monthID);
    },

    // covered
    getCurrentDay: function () {
      return this.today.date();
    },

    getDayIndex: function () {
      var currentDay = this.getCurrentDay();
      var firstDayOffset = this.today.startOf('month').weekday();
      this.setCurrentDay(currentDay);
      return this.getCurrentDay() - 1 + firstDayOffset;
    },

    // covered
    setCurrentDay: function (dayID) {
      this.today.set('date', dayID);
    },

    goToEventList: function (monthID, dayID) {
      if (angular.isNumber(dayID)) {
        this.setCurrentDay(dayID);
        $location.path('calendar/' + monthID + '/' + dayID);
      }
    }
  };

  }]);