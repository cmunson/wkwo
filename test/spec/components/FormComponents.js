'use strict';

describe('FormComponents', function () {
  var FormComponents, component;

  beforeEach(function () {
    FormComponents = require('../../../src/scripts/components/FormComponents.jsx');
    component = FormComponents();
  });

  it('should create a new instance of FormComponents', function () {
    expect(component).toBeDefined();
  });
});
