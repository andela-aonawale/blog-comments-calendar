'use strict';

// Test suite for the month service
describe('MonthService', function () {

  // Declare global variables
  var MonthService;

  // Initialize the module
  beforeEach(module('event'));

  // Initialize the service
  beforeEach(inject(function (_MonthService_) {
    MonthService = _MonthService_;
  }));


  // Test suite for populating the service with initial data
  describe('Populate service with months', function () {

    it('it has a null value set to today', function () {
      expect(MonthService.today).toBe(null);
    });
  });

});