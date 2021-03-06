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
const nonprofit_repository_service_1 = require('./repositories/nonprofit-repository.service');
let AppComponent = class AppComponent {
    constructor(route, router, nonProfitService) {
        this.route = route;
        this.router = router;
        this.nonProfitService = nonProfitService;
        this.title = "Hello World";
        //this.login = false;
        this.login = this.nonProfitService.getLogin();
        this.nonprofit = false;
    }
    ngOnInit() {
    }
    ngDoCheck() {
        this.login = this.nonProfitService.getLogin();
        this.nonprofit = this.nonProfitService.isNonProfit();
    }
    logout() {
        this.nonProfitService.setLogin(false);
        this.login = false;
    }
    nav(rt) {
        this.router.navigateByUrl('');
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        templateUrl: './app/app.html',
        styleUrls: ['./app/app.css'],
    }), 
    __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, nonprofit_repository_service_1.NonProfitService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map