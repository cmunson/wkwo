'use strict';

describe('Questions', function () {
  var Questions, component;

  beforeEach(function () {
    Questions = require('../../../src/scripts/components/Questions.jsx');
    component = Questions();
  });

  it('should create a new instance of Questions', function () {
    expect(component).toBeDefined();
  });
});
