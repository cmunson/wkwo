'use strict';

describe('ScreensaverAdInternal', function () {
  var ScreensaverAdInternal, component;

  beforeEach(function () {
    ScreensaverAdInternal = require('../../../src/scripts/components/ScreensaverAdInternal.jsx');
    component = ScreensaverAdInternal();
  });

  it('should create a new instance of ScreensaverAdInternal', function () {
    expect(component).toBeDefined();
  });
});
