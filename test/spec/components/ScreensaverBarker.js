'use strict';

describe('ScreensaverBarker', function () {
  var ScreensaverBarker, component;

  beforeEach(function () {
    ScreensaverBarker = require('../../../src/scripts/components/ScreensaverBarker.jsx');
    component = ScreensaverBarker();
  });

  it('should create a new instance of ScreensaverBarker', function () {
    expect(component).toBeDefined();
  });
});
