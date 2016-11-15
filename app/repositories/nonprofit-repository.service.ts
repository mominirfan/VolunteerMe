import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NonProfitService{
    private _apiUrl = 'http://private-a846b-volunteerme.apiary-mock.com/npdashboard';

    constructor(private http: Http){
        
    }
    public get(): Promise<any>{
        return this.http.get(this._apiUrl)
        .toPromise()
        .then(x => x.json().data as any[]);
    }
}