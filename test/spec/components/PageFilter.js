'use strict';

describe('PageFilter', function () {
  var PageFilter, component;

  beforeEach(function () {
    PageFilter = require('../../../src/scripts/components/PageFilter.jsx');
    component = PageFilter();
  });

  it('should create a new instance of PageFilter', function () {
    expect(component).toBeDefined();
  });
});
