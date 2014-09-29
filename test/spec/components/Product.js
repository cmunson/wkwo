'use strict';

describe('Product', function () {
  var Product, component;

  beforeEach(function () {
    Product = require('../../../src/scripts/components/Product.jsx');
    component = Product();
  });

  it('should create a new instance of Product', function () {
    expect(component).toBeDefined();
  });
});
