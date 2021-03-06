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
const http_1 = require('@angular/http');
const app_component_1 = require('./app.component');
const landing_component_1 = require('./landing/landing.component');
const create_volunteer_component_1 = require('./create-volunteer/create-volunteer.component');
const create_nonprofit_component_1 = require('./create-nonprofit/create-nonprofit.component');
const postProject_component_1 = require('./postProject/postProject.component');
const nonprofit_dashboard_component_1 = require('./nonprofit-dashboard/nonprofit-dashboard.component');
const discriminator_page_component_1 = require('./discriminator-page/discriminator-page.component');
const viewProject_component_1 = require('./viewProject/viewProject.component');
const nonprofit_repository_service_1 = require('./repositories/nonprofit-repository.service');
const login_component_1 = require('./login/login.component');
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: '', component: landing_component_1.LandingComponent },
                { path: 'create-volunteer', component: create_volunteer_component_1.CreateVolunteerComponent },
                { path: 'create-nonprofit', component: create_nonprofit_component_1.CreateNonprofitComponent },
                { path: 'postProject', component: postProject_component_1.PostProjectComponent },
                { path: 'nonprofit-dashboard', component: nonprofit_dashboard_component_1.NonprofitDashboardComponent },
                { path: 'discriminator-page', component: discriminator_page_component_1.DiscrimPageComponent },
                { path: 'viewProject', component: viewProject_component_1.ViewProjectComponent },
                { path: 'login', component: login_component_1.LoginComponent }
            ]),
            forms_1.FormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            landing_component_1.LandingComponent,
            create_volunteer_component_1.CreateVolunteerComponent,
            create_nonprofit_component_1.CreateNonprofitComponent,
            postProject_component_1.PostProjectComponent,
            nonprofit_dashboard_component_1.NonprofitDashboardComponent,
            discriminator_page_component_1.DiscrimPageComponent,
            viewProject_component_1.ViewProjectComponent,
            login_component_1.LoginComponent
        ],
        providers: [nonprofit_repository_service_1.NonProfitService],
        bootstrap: [app_component_1.AppComponent]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map