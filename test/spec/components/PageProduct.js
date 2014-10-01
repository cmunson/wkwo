'use strict';

describe('PageProduct', function () {
  var PageProduct, component;

  beforeEach(function () {
    PageProduct = require('../../../src/scripts/components/PageProduct.jsx');
    component = PageProduct();
  });

  it('should create a new instance of PageProduct', function () {
    expect(component).toBeDefined();
  });
});
