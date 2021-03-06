
/*global describe, it, browser,require */

describe('highlight', function () {
    'use strict';

    it('match the baseline highlight screenshot', function (done) {
        var common = require('../common');

        browser
            .setupTest('/highlight/fixtures/test.full.html')
            .compareScreenshot({
                prefix: common.getPrefix(browser),
                screenshotName: 'highlight',
                selector: '#screenshot-highlight'
            })
            .call(done);
    });
});
