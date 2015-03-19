'use strict';

// Test suite for the month service
describe('MonthService', function () {

  // Declare global variables
  var MonthService;
  var $localStorage;

  // Initialize the module
  beforeEach(module('calendar'));

  // Initialize the service
  beforeEach(inject(function (_MonthService_) {
    MonthService = _MonthService_;
    spyOn(MonthService, 'setDays');
  }));


  // Test suite for populating the service with initial data
  describe('Populate service with months', function () {

    it('should contain a $localStorage service', inject(function ($localStorage) {
      expect($localStorage).not.toBe(null);
    }));

    it('should have an initial value of null for today', function () {
      expect(MonthService.today).toBe(null);
    });

    it('should set a value to today when initialized', function () {
      MonthService.init();
      expect(MonthService.today).not.toBe(null);
    });

    it('should set the value of today to the current day', function () {
      var today = moment();
      MonthService.init();
      expect(MonthService.today.date()).toEqual(today.date());
    });

    it('should create a localStorage item upon initialization', inject(function ($localStorage) {
      MonthService.init();
      expect($localStorage.calendar).not.toBe(null);
    }));

    it('should call the setDays method upon initialization', function () {
      MonthService.init();
      expect(MonthService.setDays).toHaveBeenCalled();
    });
  });

  // Test suite to check the month names
  describe('Get month names', function () {

    it('should return "January" from an array of month names', function () {
      expect(MonthService.getMonths()[0]).toEqual('January');
    });

    it('should return "August" from an array of month names', function () {
      expect(MonthService.getMonths()[7]).toEqual('August');
    });
  });

  // Test suite to check that the current month is set and is accurate
  describe('Check the current month', function () {

    it('should ')
  });

  // Test suite to check that the current day is set and is accurate
  describe('Check the current day', function () {

    it('should have the current day set to today upon initialization', function () {
      var today = moment();
      MonthService.init();
      expect(MonthService.getCurrentDay()).toEqual(today.date());
    });

    it('should be able to set the current date to a specified value', function () {
      MonthService.init();
      MonthService.setCurrentDay(11);
      expect(MonthService.getCurrentDay()).toEqual(11);
    });

    it('should return the day of the week for the first day of the current month', function () {
      MonthService.init();
      MonthService.setCurrentMonth();
    });

  });

});