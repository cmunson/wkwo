'use strict';

describe('Main', function () {
  var WkwoApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    WkwoApp = require('../../../src/scripts/components/WkwoApp.jsx');
    component = WkwoApp();
  });

  it('should create a new instance of WkwoApp', function () {
    expect(component).toBeDefined();
  });
});
