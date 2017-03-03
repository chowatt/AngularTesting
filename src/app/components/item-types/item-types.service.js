System.register(["@angular/core", "@angular/http", "rxjs/add/operator/catch", "rxjs/add/operator/map", "rxjs/add/operator/toPromise"], function (exports_1, context_1) {
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
    var core_1, http_1, ItemTypesService;
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
            function (_2) {
            },
            function (_3) {
            }
        ],
        execute: function () {
            ItemTypesService = class ItemTypesService {
                constructor(http) {
                    this.http = http;
                    this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    this.itemsUrl = "https://onlineapp-v2-0-chowatt33555.codeanyapp.com/item_types";
                }
                getItems() {
                    return this.http.get(this.itemsUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
                }
                getItem(id) {
                    const url = `${this.itemsUrl}/${id}`;
                    return this.http.get(url)
                        .map(this.extractData)
                        .catch(this.handleError);
                }
                delete(id) {
                    const url = `${this.itemsUrl}/${id}`;
                    return this.http.get(url)
                        .map(this.extractData)
                        .catch(this.handleError);
                }
                create(itemType) {
                    return this.http
                        .post(this.itemsUrl, itemType, { headers: this.headers })
                        .map(this.extractData)
                        .catch(this.handleError);
                }
                update(itemType) {
                    const url = `${this.itemsUrl}/${itemType.id}`;
                    return this.http
                        .put(url, itemType, { headers: this.headers })
                        .map(this.extractData)
                        .catch(this.handleError);
                }
                handleError(error) {
                    console.error('An error occurred', error); // for demo purposes only
                    return Promise.reject(error.message || error);
                }
                extractData(res) {
                    let body = res.json();
                    return body.item_type || body.item_types || {};
                }
            };
            ItemTypesService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], ItemTypesService);
            exports_1("ItemTypesService", ItemTypesService);
        }
    };
});
//# sourceMappingURL=item-types.service.js.map