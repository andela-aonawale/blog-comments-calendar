angular.module('calendar')
  .factory('MonthService', ['$http', '$localStorage', '$location', function ($http, $localStorage, $location) {

    // TODO: refactor this into separate services.

  return {
    // covered
    today: null,

    currentEvent: null,

    // covered
    init: function () {
      this.today = moment();
      if (!$localStorage.calendar) {
        $localStorage.calendar = {};
        $localStorage.calendar[this.today.month()] = this.setDays(this.today.month());
      }
    },

    /*
      Define getter methods.
    */

    // Get an array on all the month names.
    // TODO: change the method signature
    // covered
    getMonths: function () {
      return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    },

    // Get the current month.
    getCurrentMonth: function () {
      return this.today.month();
    },

    // Get all the days in a particular month
    getDays: function () {
      if (!$localStorage.calendar[this.getCurrentMonth()]) {
        $localStorage.calendar[this.getCurrentMonth()] = this.setDays(this.getCurrentMonth());
      }
      return $localStorage.calendar[this.getCurrentMonth()];
    },

    // Get the current day
    // covered
    getCurrentDay: function () {
      return this.today.date();
    },

    // Get a reference to the index position of the first day of the month.
    getFirstDayID: function () {
      return this.today.startOf('month').weekday();
    },

    // Get the index of the data corresponding to the current day.
    getDayIndex: function () {
      var currentDay = this.getCurrentDay();
      var firstDayOffset = this.today.startOf('month').weekday();
      this.setCurrentDay(currentDay);
      return this.getCurrentDay() - 1 + firstDayOffset;
    },

    // Get all the events for a particular day in the current month.
    getEvents: function () {
      return $localStorage.calendar[this.getCurrentMonth()][this.getDayIndex()].events;
    },

    getEvent: function (eventID) {
      return $localStorage.calendar[this.getCurrentMonth()][this.getDayIndex()].events[eventID];
    },

    // Get all comments for a particular event.
    getComments: function (eventID) {
      return $localStorage.calendar[this.getCurrentMonth()][this.getDayIndex()].events[eventID].comments;
    },

    getCurrentEvent: function () {
      return this.currentEvent;
    },


    /*
      Define setter methods.
    */

    // Initialize the data in the current month.
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

    // Set the current month to the specified value
    setCurrentMonth: function (monthID) {
      this.today.set('month', monthID);
    },

    // Set the current day to the specified value
    // covered
    setCurrentDay: function (dayID) {
      this.today.set('date', dayID);
    },

    setCurrentEvent: function (eventID) {
      this.currentEvent = eventID;
    },


    /*
      Define data manipulation methods.
    */

    addEvent: function (eventData) {
      $localStorage.calendar[this.getCurrentMonth()][this.getDayIndex()].events.push(eventData);
    },

    saveEvent: function (monthID, dayID, eventID, eventData) {
      $localStorage.calendar[monthID].days[dayID].events[eventID] = eventData;
    },

    removeEvent: function (eventID) {
      $localStorage.calendar[this.getCurrentMonth()][this.getDayIndex()].events.splice(eventID, 1);

    },

    addComment: function (eventID, commentData) {
      $localStorage.calendar[this.getCurrentMonth()][this.getDayIndex()].events[eventID].comments = $localStorage.calendar[this.getCurrentMonth()][this.getDayIndex()].events[eventID].comments || [];

      $localStorage.calendar[this.getCurrentMonth()][this.getDayIndex()].events[eventID].comments.push(commentData);
    },


    /*
      Define page-routing methods.
    */

    goToEventList: function (monthID, dayID) {
      if (angular.isNumber(dayID)) {
        this.setCurrentDay(dayID);
        $location.path('calendar/' + monthID + '/' + dayID);
      }
    },

    goToEvent: function (monthID, dayID, eventID) {
      if (angular.isNumber(dayID) && angular.isNumber(eventID)) {
        this.setCurrentEvent(eventID);
        $location.path('calendar/' + monthID + '/' + dayID + '/events/' + eventID);
      }
    }
  };

  }]);