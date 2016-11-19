import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/toPromise';


@Injectable()
export class NonProfitService{
    private _apiUrl = "https://perunasoft.com/43231257";
    private _apiUrl2 = "http://private-a846b-volunteerme.apiary-mock.com";

    constructor(private http: Http){
        
    }
    // public get(): Observable<any[]>{
    //     return this.http.get(this._apiUrl)
    //                     .map(this.extractData)
    //                     .catch(this.handleError);
    // }
    private extractData(res: Response){
        let body = res.json();
        return body || { };
    }
    public post(volunteer) : Promise<any[]>{
        //let headers = new Headers({ 'Content-Type': 'application/json'});
        let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
		let options = new RequestOptions({ headers: headers});

        //this.http.defaults.useXDomain = true;
        return this.http
            .post(this._apiUrl + "/create-user.php?add=true", 
            "name=" + encodeURIComponent(volunteer.name) +
            "&email= " + encodeURIComponent(volunteer.email) + 
            "&password=" + encodeURIComponent(volunteer.password) +
            "&description=" + encodeURIComponent(volunteer.description) + 
            "&website=" + encodeURIComponent(volunteer.website), options)
            .toPromise()
            .then(() => volunteer)
            .catch(x => alert(x.json().error));
            // .then(x => x.json())
            // .catch(x => alert(x.error));
            //.catch(this.handleError);
    }
    public get(): Promise<any[]>{
        let headers = new Headers({ 'Content-Type': 'application/json'});
		let options = new RequestOptions({ headers: headers});

        return this.http.get(this._apiUrl2 + "/npdashboard")
        .toPromise()
        .then(x => x.json() as any[])
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