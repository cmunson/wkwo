'use strict';

describe('Scanner', function () {
  var Scanner, component;

  beforeEach(function () {
    Scanner = require('../../../src/scripts/components/Scanner.jsx');
    component = Scanner();
  });

  it('should create a new instance of Scanner', function () {
    expect(component).toBeDefined();
  });
});
