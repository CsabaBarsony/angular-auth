'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('/restricted');
  });

  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
  pause();  expect(browser().location().url()).toBe("/view1");
  });
});
