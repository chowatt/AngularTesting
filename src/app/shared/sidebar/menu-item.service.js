System.register(["@angular/core", "./menu-items"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, menu_items_1, MenuItemService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (menu_items_1_1) {
                menu_items_1 = menu_items_1_1;
            }
        ],
        execute: function () {
            MenuItemService = class MenuItemService {
                getMenuItems() {
                    return Promise.resolve(menu_items_1.MENUITEMS);
                }
            };
            MenuItemService = __decorate([
                core_1.Injectable()
            ], MenuItemService);
            exports_1("MenuItemService", MenuItemService);
        }
    };
});
//# sourceMappingURL=menu-item.service.js.map