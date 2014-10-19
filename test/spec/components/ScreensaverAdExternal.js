'use strict';

describe('ScreensaverAdExternal', function () {
  var ScreensaverAdExternal, component;

  beforeEach(function () {
    ScreensaverAdExternal = require('../../../src/scripts/components/ScreensaverAdExternal.jsx');
    component = ScreensaverAdExternal();
  });

  it('should create a new instance of ScreensaverAdExternal', function () {
    expect(component).toBeDefined();
  });
});
