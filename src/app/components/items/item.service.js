System.register(["@angular/core", "@angular/http", "rxjs/add/operator/toPromise", "./item"], function (exports_1, context_1) {
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
    var core_1, http_1, item_1, ItemService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {
            },
            function (item_1_1) {
                item_1 = item_1_1;
            }
        ],
        execute: function () {
            ItemService = class ItemService {
                constructor(http) {
                    this.http = http;
                    this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    this.itemsUrl = "https://onlineapp-v2-0-chowatt33555.codeanyapp.com/items";
                }
                getItems() {
                    return this.http.get(this.itemsUrl)
                        .toPromise()
                        .then(response => response.json().data)
                        .catch(this.handleError);
                }
                getItem(id) {
                    return Promise.resolve(new item_1.Item);
                }
                delete(id) {
                    return;
                }
                create(item) {
                    return Promise.resolve(new item_1.Item);
                }
                update(item) {
                    return Promise.resolve(new item_1.Item);
                }
                handleError(error) {
                    console.error('An error occurred', error); // for demo purposes only
                    return Promise.reject(error.message || error);
                }
            };
            ItemService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], ItemService);
            exports_1("ItemService", ItemService);
        }
    };
});
//# sourceMappingURL=item.service.js.map