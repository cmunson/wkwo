'use strict';

describe('ProductView', function () {
  var ProductView, component;

  beforeEach(function () {
    ProductView = require('../../../src/scripts/components/ProductView.jsx');
    component = ProductView();
  });

  it('should create a new instance of ProductView', function () {
    expect(component).toBeDefined();
  });
});
