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

    it('should set the value of today to the current day', function () {
      MonthService.init();
      expect(MonthService.today).not.toBe(null);
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

});