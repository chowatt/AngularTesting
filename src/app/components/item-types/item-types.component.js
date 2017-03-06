System.register(["@angular/core", "./item-type", "./item-types.service", "@angular/router", "@angular/common"], function (exports_1, context_1) {
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
    var core_1, item_type_1, item_types_service_1, router_1, common_1, ItemTypesComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (item_type_1_1) {
                item_type_1 = item_type_1_1;
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
            ItemTypesComponent = class ItemTypesComponent {
                constructor(itemTypesService, route, location) {
                    this.itemTypesService = itemTypesService;
                    this.route = route;
                    this.location = location;
                }
                ngOnInit() {
                    this.getItemTypes();
                }
                onSelect(item) {
                    this.selectedItemType = item;
                }
                onNew() {
                    this.selectedItemType = new item_type_1.ItemType;
                }
                save(itemType) {
                    console.log(itemType);
                    if (itemType.id) {
                        this.itemTypesService.update(itemType)
                            .subscribe(itemType => this.selectedItemType = itemType, error => this.errorMessage = error, () => this.selectedItemType = null);
                    }
                    else {
                        this.itemTypesService.create(itemType)
                            .subscribe(itemType => this.itemTypes.push(itemType), error => this.errorMessage = error, () => this.selectedItemType = null);
                    }
                }
                onEdit(itemType) {
                    this.selectedItemType = itemType;
                }
                onDelete(item) {
                }
                cancel() {
                    this.selectedItemType = null;
                }
                getItemTypes() {
                    this.itemTypesService.getItemTypes().subscribe(itemTypes => this.itemTypes = itemTypes, error => this.errorMessage = error);
                }
            };
            ItemTypesComponent = __decorate([
                core_1.Component({
                    selector: 'item-types',
                    templateUrl: './app/components/item-types/item-types.html',
                    providers: [item_types_service_1.ItemTypesService]
                }),
                __metadata("design:paramtypes", [item_types_service_1.ItemTypesService,
                    router_1.ActivatedRoute,
                    common_1.Location])
            ], ItemTypesComponent);
            exports_1("ItemTypesComponent", ItemTypesComponent);
        }
    };
});
//# sourceMappingURL=item-types.component.js.map