System.register(["protractor"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var protractor_1;
    return {
        setters: [
            function (protractor_1_1) {
                protractor_1 = protractor_1_1;
            }
        ],
        execute: function () {
            describe('QuickStart E2E Tests', function () {
                var expectedMsg = 'Hello Angular';
                beforeEach(function () {
                    protractor_1.browser.get('');
                });
                it('should display: ' + expectedMsg, function () {
                    expect(protractor_1.element(protractor_1.by.css('h1')).getText()).toEqual(expectedMsg);
                });
            });
        }
    };
});
//# sourceMappingURL=app.e2e-spec.js.map