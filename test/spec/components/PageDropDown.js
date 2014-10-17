'use strict';

describe('PageDropDown', function () {
  var PageDropDown, component;

  beforeEach(function () {
    PageDropDown = require('../../../src/scripts/components/PageDropDown.jsx');
    component = PageDropDown();
  });

  it('should create a new instance of PageDropDown', function () {
    expect(component).toBeDefined();
  });
});
