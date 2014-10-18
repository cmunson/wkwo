'use strict';

describe('PageQuestion', function () {
  var PageQuestion, component;

  beforeEach(function () {
    PageQuestion = require('../../../src/scripts/components/PageQuestion.jsx');
    component = PageQuestion();
  });

  it('should create a new instance of PageQuestion', function () {
    expect(component).toBeDefined();
  });
});
