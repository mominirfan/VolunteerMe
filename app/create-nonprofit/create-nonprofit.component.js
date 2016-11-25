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
const core_1 = require('@angular/core');
const nonprofit_repository_service_1 = require('../repositories/nonprofit-repository.service');
let CreateNonprofitComponent = class CreateNonprofitComponent {
    constructor(nonProfitService) {
        this.nonProfitService = nonProfitService;
        this.nonprofit = {};
        this.title = "Create Non-Profit Account";
    }
    ngOnInit() { }
    submit() {
        this.nonProfitService.postNonProfit(this.nonprofit)
            .then(() => {
            this.nonProfitService.setLogin(true);
            this.nonProfitService.setEmail(this.nonprofit);
        });
    }
};
CreateNonprofitComponent = __decorate([
    core_1.Component({
        selector: 'create-nonprofit',
        templateUrl: './app/create-nonprofit/create-nonprofit.component.html',
        styleUrls: ['./app/create-nonprofit/create-nonprofit.component.css']
    }), 
    __metadata('design:paramtypes', [nonprofit_repository_service_1.NonProfitService])
], CreateNonprofitComponent);
exports.CreateNonprofitComponent = CreateNonprofitComponent;
//# sourceMappingURL=create-nonprofit.component.js.map