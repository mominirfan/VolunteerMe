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
const router_1 = require('@angular/router');
const nonprofit_repository_service_1 = require('../repositories/nonprofit-repository.service');
let LoginComponent = class LoginComponent {
    constructor(router, nonProfitService) {
        this.router = router;
        this.nonProfitService = nonProfitService;
        this.model = {};
        this.loading = false;
    }
    ngOnInit() { }
    getModel() {
        return this.model;
    }
    submit() {
        this.nonProfitService.setEmail(this.model);
        console.log("In login, email = " + this.nonProfitService.getEmail());
        //this.router.navigateByUrl('');
    }
};
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: './app/login/login.component.html',
    }), 
    __metadata('design:paramtypes', [router_1.Router, nonprofit_repository_service_1.NonProfitService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map