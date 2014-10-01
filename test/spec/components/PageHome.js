'use strict';

describe('PageHome', function () {
  var PageHome, component;

  beforeEach(function () {
    PageHome = require('../../../src/scripts/components/PageHome.jsx');
    component = PageHome();
  });

  it('should create a new instance of PageHome', function () {
    expect(component).toBeDefined();
  });
});
