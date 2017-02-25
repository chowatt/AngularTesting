System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ITEMS;
    return {
        setters: [],
        execute: function () {
            exports_1("ITEMS", ITEMS = [
                {
                    id: 1,
                    sku: 'abcd',
                    descrip: 'Lorem Ipsum',
                    qty: 100,
                    created: new Date(),
                    modified: new Date()
                }
            ]);
        }
    };
});
//# sourceMappingURL=mock-items.js.map