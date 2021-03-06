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
const http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
let NonProfitService = class NonProfitService {
    constructor(http) {
        this.http = http;
        this._apiUrl = "https://perunasoft.com/43231257";
        this._apiUrl2 = "http://private-a846b-volunteerme.apiary-mock.com";
        this.email = "";
    }
    // public get(): Observable<any[]>{
    //     return this.http.get(this._apiUrl)
    //                     .map(this.extractData)
    //                     .catch(this.handleError);
    // }
    extractData(res) {
        let body = res.json();
        return body || {};
    }
    setLogin(val) {
        this.login = val;
    }
    getLogin() {
        return this.login;
    }
    postNonProfit(nonprofit) {
        let headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new http_1.RequestOptions({ headers: headers });
        return this.http
            .post(this._apiUrl + "/create_nonprofit.php?add=true", "name=" + encodeURIComponent(nonprofit.name) +
            "&email=" + encodeURIComponent(nonprofit.email) +
            "&password=" + encodeURIComponent(nonprofit.password) +
            "&description=" + encodeURIComponent(nonprofit.description) +
            "&website=" + encodeURIComponent(nonprofit.website), options)
            .toPromise()
            .then(() => nonprofit)
            .catch(x => alert(x.json().error));
    }
    post(volunteer) {
        //let headers = new Headers({ 'Content-Type': 'application/json'});
        let headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new http_1.RequestOptions({ headers: headers });
        //this.http.defaults.useXDomain = true;
        return this.http
            .post(this._apiUrl + "/create-user.php?add=true", "name=" + encodeURIComponent(volunteer.name) +
            "&email= " + encodeURIComponent(volunteer.email) +
            "&password=" + encodeURIComponent(volunteer.password) +
            "&description=" + encodeURIComponent(volunteer.description), options)
            .toPromise()
            .then(() => volunteer)
            .catch(x => alert(x.json().error));
        // .then(x => x.json())
        // .catch(x => alert(x.error));
        //.catch(this.handleError);
    }
    setEmail(user) {
        this.email = user.email;
        var t = "";
        var onload = (data) => {
            if (data['_body'] == "volunteer")
                this.nonprofit = false;
            else if (data['_body'] == "nonprofit")
                this.nonprofit = true;
            else {
                this.nonprofit = false;
                console.log("Neither volunteer nor nonprofit! WHAT SICK BEAST ARE YOU? ");
            }
        };
        // this.getType(this.email)
        //     .then(x => {
        //         t = x;
        //         this.isNonProfit(t);
        //         });
        this.getType(this.email)
            .then(onload);
    }
    setProject(project) {
        this.currProject = project;
    }
    getProject() {
        return this.currProject;
    }
    getEmail() {
        return this.email;
    }
    isNonProfit() {
        return this.nonprofit;
    }
    getType(email) {
        let headers = new http_1.Headers({ 'Content-Type': 'text/html' });
        let options = new http_1.RequestOptions({ headers: headers });
        return this.http
            .get(this._apiUrl + "/volnonp.php?display=true" +
            "&email=" + email, options)
            .toPromise()
            .then()
            .catch(this.handleError);
    }
    postProject(project) {
        let headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new http_1.RequestOptions({ headers: headers });
        //"&nonprofit=" + encodeURIComponent(project.np_email)
        return this.http
            .post(this._apiUrl + "/projects.php?add=true", "project_title=" + encodeURIComponent(project.project_title) +
            "&nonprofit=" + encodeURIComponent(this.email) +
            "&project_description=" + encodeURIComponent(project.project_description) +
            "&location=" + encodeURIComponent(project.location) +
            "&start_date=" + encodeURIComponent(project.start_date) +
            "&end_date=" + encodeURIComponent(project.end_date) +
            "&remote_work=" + encodeURIComponent(project.remote_work) +
            "&req_skills=" + encodeURIComponent(project.req_skills), options)
            .toPromise()
            .then(() => project)
            .catch(x => alert(x.json().error));
    }
    deleteProject(project_title) {
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers: headers });
        return this.http
            .get(this._apiUrl + "/projects.php?delete=true" +
            "&project_delete=" + project_title, options)
            .toPromise()
            .then()
            .catch(this.handleError);
    }
    addVolunteer(project) {
        let headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new http_1.RequestOptions({ headers: headers });
        return this.http
            .post(this._apiUrl + "/userstable.php?add=true", "project=" + encodeURIComponent(project.project_title) +
            "&email=" + encodeURIComponent(this.email), options)
            .toPromise()
            .then(() => project)
            .catch(x => alert(x.json().error));
    }
    getSpecificProjects(nonProfit) {
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers: headers });
        return this.http
            .get(this._apiUrl + "/projects.php?getProjects=true" +
            "&np=" + nonProfit, options)
            .toPromise()
            .then(x => x.json())
            .catch(this.handleError);
    }
    // public get(): Promise<any[]>{
    //     // let headers = new Headers({ 'Content-Type': 'application/json'});
    // 	// let options = new RequestOptions({ headers: headers});
    //     // return this.http.get(this._apiUrl2 + "/userstable.php?projvols=true",
    //     // "project=" + encodeURIComponent(project), options)
    //     // .toPromise()
    //     // .then(x => x.json() as any[])
    //     // .catch(this.handleError);
    //     // 
    // }
    getProjects() {
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(this._apiUrl + "/projects.php?display=true")
            .toPromise()
            .then(x => x.json())
            .catch(this.handleError);
    }
    getVolunteers(project) {
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers: headers });
        return this.http
            .get(this._apiUrl + "/userstable.php?projvols=true" +
            "&project=" + encodeURIComponent(project), options)
            .toPromise()
            .then(x => x.json())
            .catch(this.handleError);
    }
    handleError(error) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg;
        if (error instanceof http_1.Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    }
};
NonProfitService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], NonProfitService);
exports.NonProfitService = NonProfitService;
//# sourceMappingURL=nonprofit-repository.service.js.map