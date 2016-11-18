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
        this._apiUrl = "http://private-a846b-volunteerme.apiary-mock.com";
    }
    // public get(): Observable<any[]>{
    //     return this.http.get(this._apiUrl)
    //                     .map(this.extractData)
    //                     .catch(this.handleError);
    // }
    extractData(res) {
        let body = res.json();
        return body.data || {};
    }
    get() {
        return this.http.get(this._apiUrl + "/npdashboard")
            .toPromise()
            .then(x => x.json().data)
            .catch(this.handleError);
        // 
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