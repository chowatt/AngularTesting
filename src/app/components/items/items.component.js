System.register(["@angular/core", "./item", "./item.service", "../item-types/item-types.service", "@angular/router", "@angular/common"], function (exports_1, context_1) {
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
    var core_1, item_1, item_service_1, item_types_service_1, router_1, common_1, ItemsComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (item_1_1) {
                item_1 = item_1_1;
            },
            function (item_service_1_1) {
                item_service_1 = item_service_1_1;
            },
            function (item_types_service_1_1) {
                item_types_service_1 = item_types_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }
        ],
        execute: function () {
            ItemsComponent = class ItemsComponent {
                constructor(itemTypesService, itemService, route, location) {
                    this.itemTypesService = itemTypesService;
                    this.itemService = itemService;
                    this.route = route;
                    this.location = location;
                }
                ngOnInit() {
                    this.getItems();
                    this.getItemTypes();
                }
                onSelect(item) {
                    this.selectedItem = item;
                }
                onNew(item) {
                    this.selectedItem = new item_1.Item;
                }
                save(item) {
                    if (item.id) {
                        this.itemService.update(item)
                            .subscribe(item => this.selectedItem = item, error => this.errorMessage = error, () => this.selectedItem = null);
                    }
                    else {
                        this.itemService.create(item)
                            .subscribe(item => this.items.push(item), error => this.errorMessage = error, () => this.selectedItem = null);
                    }
                }
                onEdit(item) {
                    this.selectedItem = item;
                }
                onDelete(item) {
                }
                cancel() {
                    this.selectedItem = null;
                }
                getItems() {
                    this.itemService.getItems()
                        .subscribe(items => this.items = items, error => this.errorMessage = error);
                }
                getItemTypes() {
                    this.itemTypesService.getItemTypes().subscribe(itemTypes => this.itemTypes = itemTypes, error => this.errorMessage = error);
                }
            };
            ItemsComponent = __decorate([
                core_1.Component({
                    selector: 'dashboard',
                    templateUrl: './app/components/items/items.html',
                    providers: [item_service_1.ItemService, item_types_service_1.ItemTypesService]
                }),
                __metadata("design:paramtypes", [item_types_service_1.ItemTypesService,
                    item_service_1.ItemService,
                    router_1.ActivatedRoute,
                    common_1.Location])
            ], ItemsComponent);
            exports_1("ItemsComponent", ItemsComponent);
        }
    };
});
//# sourceMappingURL=items.component.js.map