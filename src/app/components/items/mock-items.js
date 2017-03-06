System.register(["../item-types/item-type"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var item_type_1, ITEMS;
    return {
        setters: [
            function (item_type_1_1) {
                item_type_1 = item_type_1_1;
            }
        ],
        execute: function () {
            exports_1("ITEMS", ITEMS = [
                {
                    id: '1',
                    sku: 'abcd',
                    description: 'Lorem Ipsum',
                    qty: 100,
                    created: new Date(),
                    modified: new Date(),
                    item_type: new item_type_1.ItemType
                }
            ]);
        }
    };
});
//# sourceMappingURL=mock-items.js.map