System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MENUITEMS;
    return {
        setters: [],
        execute: function () {
            exports_1("MENUITEMS", MENUITEMS = [
                {
                    id: 1,
                    title: "Items",
                    itemtype: "Route",
                    location: "items",
                    sort: 1,
                    icon: "fa fa-sitemap"
                }, {
                    id: 2,
                    title: "Item Types",
                    itemtype: "Route",
                    location: "item-types",
                    sort: 2,
                    icon: "fa fa-filter"
                }, {
                    id: 3,
                    title: "External Site",
                    itemtype: "Url",
                    location: "http://howattech.com",
                    sort: 3,
                    icon: "fa fa-external-link"
                }
            ]);
        }
    };
});
//# sourceMappingURL=menu-items.js.map