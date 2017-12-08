"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProduitApi = (function () {
    function ProduitApi(http, _communServ
        // ,@Inject(APP_CONFIG) private config: IAppConfig
    ) {
        this.http = http;
        this._communServ = _communServ;
        this._http = http;
        // console.log("this.config.apiEndpoint "+this.config.apiEndpoint)
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Access-Control-Allow-Origin', '*');
        this.headers.append('Access-Control-Allow-Methods', 'GET');
        this.headers.append('Access-Control-Allow-Headers', 'Content-Type');
    }
    /** send all Produits
     * recieve null if not exist or User if exist
  
     * @returns Observale of Array<Produit>
     */
    ProduitApi.prototype.getProduits = function () {
        return this.http.get(this._communServ.getFullUrl('produit/all'));
    };
    ProduitApi = __decorate([
        core_1.Injectable()
    ], ProduitApi);
    return ProduitApi;
}());
exports.ProduitApi = ProduitApi;
