"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FiltreBarComponent = (function () {
    function FiltreBarComponent() {
    }
    FiltreBarComponent.prototype.ngOnInit = function () {
        this.test = 'test output between two components';
    };
    __decorate([
        core_1.Output()
    ], FiltreBarComponent.prototype, "test", void 0);
    FiltreBarComponent = __decorate([
        core_1.Component({
            selector: 'app-filtre-bar',
            templateUrl: './filtre-bar.component.html',
            styleUrls: ['./filtre-bar.component.css']
        })
    ], FiltreBarComponent);
    return FiltreBarComponent;
}());
exports.FiltreBarComponent = FiltreBarComponent;
