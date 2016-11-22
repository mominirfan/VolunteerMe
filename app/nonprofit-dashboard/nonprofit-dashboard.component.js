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
let NonprofitDashboardComponent = class NonprofitDashboardComponent {
    constructor(nonProfitService) {
        this.nonProfitService = nonProfitService;
        this.title = "My Dashboard";
        // this.nonProfitService.getSpecificProjects(this.nonProfitService.getEmail())
        // .then(x => {
        // 	this.projects = x;
        // 	this.nonProfitService.getVolunteers("dsgl")
        // 		.then( x => {
        // 			console.log(x);
        // 			//this.volunteers.push(x);
        // 			//this.projects.volunteers = x;
        // 	});
        // 	// for(var i=0; i<this.projects.length;i++){
        // 	// 	nonProfitService.getVolunteers(this.projects[i].project_title)
        // 	// 	.then( x => {
        // 	// 		this.projects[i].volunteers = x;
        // 	// });
        // });
        // });
    }
    ngOnInit() {
        var getVols = function (service, projects, i) {
            //this.nonProfitService.getVolunteers(this.projects[i]["project_title"])
            service.getVolunteers(projects["project_title"])
                .then(y => {
                projects["volunteers"] = y;
                //this.projects[i]["volunteers"] = y;
            });
        };
        this.nonProfitService.getSpecificProjects(this.nonProfitService.getEmail())
            .then(x => {
            this.projects = x;
            for (var i = 0; i < this.projects.length; i++) {
                getVols(this.nonProfitService, this.projects[i], i);
            }
            console.log("HI");
        });
        // this.nonProfitService.getSpecificProjects(this.nonProfitService.getEmail())
        // .then(x => {
        // 	this.projects = x;
        // 	for(var i=0; i<this.projects.length;i++){
        // 		//this.nonProfitService.getVolunteers(this.projects[i]["project_title"])
        // 		this.nonProfitService.getVolunteers("dsgl")
        // 		.then( y => {
        // 			this.projects[i]["volunteers"] = y;
        // 		});
        // 	}
        // this.nonProfitService.getVolunteers("dsgl")
        // 	.then( x => {
        // 		console.log(x);
        // 		//this.volunteers.push(x);
        // 		//this.projects.volunteers = x;
        // });
        // for(var i=0; i<this.projects.length;i++){
        // 	nonProfitService.getVolunteers(this.projects[i].project_title)
        // 	.then( x => {
        // 		this.projects[i].volunteers = x;
        // });
        //console.log("Projects:" + this.projects);
    }
    getProjects() {
    }
};
NonprofitDashboardComponent = __decorate([
    core_1.Component({
        selector: 'nonprofit-dashboard',
        templateUrl: './app/nonprofit-dashboard/nonprofit-dashboard.component.html',
        styleUrls: ['./app/nonprofit-dashboard/nonprofit-dashboard.component.css']
    }), 
    __metadata('design:paramtypes', [nonprofit_repository_service_1.NonProfitService])
], NonprofitDashboardComponent);
exports.NonprofitDashboardComponent = NonprofitDashboardComponent;
//# sourceMappingURL=nonprofit-dashboard.component.js.map