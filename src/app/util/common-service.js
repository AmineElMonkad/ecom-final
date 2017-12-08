"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var environment_1 = require("../../environments/environment");
var CommonService = (function () {
    function CommonService() {
    }
    /*----------------- String ------------------------- */
    CommonService.prototype.stringfyJson = function (o) {
        var cache = [];
        return JSON.stringify(o, function (key, value) {
            if (typeof value === 'object' && value !== null) {
                if (cache.indexOf(value) !== -1) {
                    // Circular reference found, discard key
                    return;
                }
                // Store value in our collection
                cache.push(value);
            }
            return value;
        });
    };
    CommonService.prototype.getFullUrl = function (url) {
        return environment_1.environment.API_ENDPOINT + url;
    };
    /*----------------- Objects -------------------------- */
    CommonService.prototype.isEmptyObject = function (obj) {
        return (typeof obj === "undefined" || obj == null || obj.length === 0 || this.stringfyJson(obj) === "{}");
    };
    CommonService = __decorate([
        core_1.Injectable()
    ], CommonService);
    return CommonService;
}());
exports.CommonService = CommonService;
