"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var produit_api_provider_1 = require("../../core/providers/produit-api.provider");
var common_service_1 = require("../../util/common-service");
var PromiseObservable_1 = require("rxjs/observable/PromiseObservable");
var ProduitListComponent = (function () {
    function ProduitListComponent(_commonService, _produitApi, route) {
        this._commonService = _commonService;
        this._produitApi = _produitApi;
        this.route = route;
    }
    ProduitListComponent.prototype.ngOnInit = function () {
        this.getAllProduits();
        this.getSelectedCategory();
        alert(this.test);
    };
    ProduitListComponent.prototype.getAllProduits = function () {
        var _this = this;
        this._produitApi.getProduits().subscribe(function (produits) {
            _this.listProduits = produits;
        });
    };
    ProduitListComponent.prototype.getSelectedCategory = function () {
        var _this = this;
        var promise = new Promise(function () {
            _this.route.params.forEach(function (params) {
                _this.cat = params['id'];
            });
        });
        return PromiseObservable_1.PromiseObservable.create(promise).share();
    };
    __decorate([
        core_1.Input()
    ], ProduitListComponent.prototype, "test", void 0);
    ProduitListComponent = __decorate([
        core_1.Component({
            encapsulation: core_1.ViewEncapsulation.None,
            selector: 'app-produit-list',
            templateUrl: './produit-list.component.html',
            styleUrls: ['./produit-list.component.scss'],
            providers: [produit_api_provider_1.ProduitApi, common_service_1.CommonService]
        })
    ], ProduitListComponent);
    return ProduitListComponent;
}());
exports.ProduitListComponent = ProduitListComponent;
