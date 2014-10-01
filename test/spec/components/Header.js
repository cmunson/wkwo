'use strict';

describe('Header', function () {
  var Header, component;

  beforeEach(function () {
    Header = require('../../../src/scripts/components/Header.jsx');
    component = Header();
  });

  it('should create a new instance of Header', function () {
    expect(component).toBeDefined();
  });
});
