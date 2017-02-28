System.register(["rxjs/add/operator/switchMap", "@angular/core", "@angular/router", "@angular/common", "./menu-item.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, common_1, menu_item_service_1, SidebarComponent;
    return {
        setters: [
            function (_1) {
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (menu_item_service_1_1) {
                menu_item_service_1 = menu_item_service_1_1;
            }
        ],
        execute: function () {
            SidebarComponent = class SidebarComponent {
                constructor(menuItemService, route, location) {
                    this.menuItemService = menuItemService;
                    this.route = route;
                    this.location = location;
                    this.title = "Main Menu";
                }
                ngOnInit() {
                    this.getMenuItems();
                }
                getMenuItems() {
                    this.menuItemService.getMenuItems().then(menuItems => this.menuItems = menuItems);
                }
                goBack() {
                    this.location.back();
                }
            };
            SidebarComponent = __decorate([
                core_1.Component({
                    selector: 'my-sidebar',
                    templateUrl: './app/shared/sidebar/sidebar.html',
                    providers: [menu_item_service_1.MenuItemService]
                    //template: '{{title}}'
                }),
                __metadata("design:paramtypes", [menu_item_service_1.MenuItemService,
                    router_1.ActivatedRoute,
                    common_1.Location])
            ], SidebarComponent);
            exports_1("SidebarComponent", SidebarComponent);
        }
    };
});
//# sourceMappingURL=sidebar.component.js.map