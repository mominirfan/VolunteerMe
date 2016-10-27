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
const platform_browser_1 = require('@angular/platform-browser');
const router_1 = require('@angular/router');
const forms_1 = require('@angular/forms');
const app_component_1 = require('./app.component');
const landing_component_1 = require('./landing/landing.component');
const create_volunteer_component_1 = require('./create-volunteer/create-volunteer.component');
const create_nonprofit_component_1 = require('./create-nonprofit/create-nonprofit.component');
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot([
                { path: '', component: landing_component_1.LandingComponent },
                { path: 'create-volunteer', component: create_volunteer_component_1.CreateVolunteerComponent },
                { path: 'create-nonprofit', component: create_nonprofit_component_1.CreateNonprofitComponent }
            ]),
            forms_1.FormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            landing_component_1.LandingComponent,
            create_volunteer_component_1.CreateVolunteerComponent,
            create_nonprofit_component_1.CreateNonprofitComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map