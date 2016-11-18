import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class NonProfitService{
    private _apiUrl = "http://private-a846b-volunteerme.apiary-mock.com";

    constructor(private http: Http){
        
    }
    // public get(): Observable<any[]>{
    //     return this.http.get(this._apiUrl)
    //                     .map(this.extractData)
    //                     .catch(this.handleError);
    // }
    private extractData(res: Response){
        let body = res.json();
        return body.data || { };
    }

    public get(): Promise<any[]>{
        return this.http.get(this._apiUrl + "/npdashboard")
        .toPromise()
        .then(  x => x.json().data as any[])
        .catch(this.handleError);
        // 
    }

    public getViewProject(): Promise<any[]>{
        return this.http.get(this._apiUrl + "/viewproject")
        .toPromise()
        .then(  x => x.json().data as any[])
        .catch(this.handleError);
        // 
    }

    private handleError (error: Response | any) {
  // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    }
}