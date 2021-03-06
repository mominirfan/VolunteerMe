import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/toPromise';


@Injectable()
export class NonProfitService{
    private _apiUrl = "https://perunasoft.com/43231257";
    private _apiUrl2 = "http://private-a846b-volunteerme.apiary-mock.com";
    private email : string;
    private currProject: string;
    private nonprofit: boolean;

    constructor(private http: Http){
        this.email = "";
    }
    private login : boolean;
    // public get(): Observable<any[]>{
    //     return this.http.get(this._apiUrl)
    //                     .map(this.extractData)
    //                     .catch(this.handleError);
    // }
    private extractData(res: Response){
        let body = res.json();
        return body || { };
    }
    public setLogin(val){
        this.login = val;
    }
    public getLogin(){
        return this.login;
    }
    public postNonProfit(nonprofit) : Promise<any[]>{
        let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
		let options = new RequestOptions({ headers: headers});
        return this.http
            .post(this._apiUrl + "/create_nonprofit.php?add=true",
        "name=" + encodeURIComponent(nonprofit.name) +
        "&email=" + encodeURIComponent(nonprofit.email) +
        "&password=" + encodeURIComponent(nonprofit.password) +
        "&description=" + encodeURIComponent(nonprofit.description) +
        "&website=" + encodeURIComponent(nonprofit.website),
        options)
        .toPromise()
        .then(() => nonprofit)
        .catch(x => alert(x.json().error));
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
            "&description=" + encodeURIComponent(volunteer.description)  
            , options)
            .toPromise()
            .then(() => volunteer)
            .catch(x => alert(x.json().error));
            // .then(x => x.json())
            // .catch(x => alert(x.error));
            //.catch(this.handleError);
    }
    public setEmail(user) {
        this.email = user.email;
        var t = "";
        var onload = (data) => {
            if(data['_body'] == "volunteer")
                this.nonprofit = false;
            else if(data['_body'] == "nonprofit")
                this.nonprofit = true;
            else{
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
    public setProject(project){
        this.currProject = project;
    }
    public getProject() : string {
        return this.currProject;
    }
    public getEmail() : string {
        return this.email;
    }
    public isNonProfit(): boolean{
        
        return this.nonprofit;
    }
    public getType(email): Promise<any>{
        let headers = new Headers({'Content-Type': 'text/html'});
        let options = new RequestOptions({ headers: headers});

        return this.http
            .get(this._apiUrl + "/volnonp.php?display=true"+
            "&email=" + email, options)
            .toPromise()
            .then()
            .catch(this.handleError);
    }
    public postProject(project) : Promise<any[]>{
        let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        let options = new RequestOptions({ headers: headers });
        //"&nonprofit=" + encodeURIComponent(project.np_email)
        return this.http
            .post(this._apiUrl + "/projects.php?add=true",
            "project_title=" + encodeURIComponent(project.project_title) +
            "&nonprofit=" + encodeURIComponent(this.email)+
            "&project_description=" + encodeURIComponent(project.project_description) + 
            "&location=" + encodeURIComponent(project.location) + 
            "&start_date=" + encodeURIComponent(project.start_date) +
            "&end_date=" + encodeURIComponent(project.end_date)+
            "&remote_work=" + encodeURIComponent(project.remote_work) +
            "&req_skills=" + encodeURIComponent(project.req_skills) 
             ,options)
            .toPromise()
            .then(() => project)
            .catch(x => alert(x.json().error));
    }
    public deleteProject(project_title): Promise<any[]>{
        let headers = new Headers({ 'Content-Type': 'application/json'});
		let options = new RequestOptions({ headers: headers});

        return this.http
            .get(this._apiUrl + "/projects.php?delete=true" +
            "&project_delete=" + project_title, options)
            .toPromise()
            .then()
            .catch(this.handleError);
    }
    public addVolunteer(project) : Promise<any[]>{
        let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        let options = new RequestOptions({ headers: headers });

        return this.http
        .post(this._apiUrl + "/userstable.php?add=true",
        "project=" + encodeURIComponent(project.project_title) + 
        "&email=" + encodeURIComponent(this.email),
        options)
        .toPromise()
        .then(() => project)
        .catch(x => alert(x.json().error));
    }
    public getSpecificProjects(nonProfit): Promise<any[]>{
        let headers = new Headers({ 'Content-Type': 'application/json'});
		let options = new RequestOptions({ headers: headers});

        return this.http
        .get(this._apiUrl + "/projects.php?getProjects=true"+
        "&np=" + nonProfit, options)
        .toPromise()
        .then(x => x.json() as any[])
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
    public getProjects(): Promise<any[]>{
        let headers = new Headers({ 'Content-Type': 'application/json'});
		let options = new RequestOptions({ headers: headers});

        return this.http.get(this._apiUrl + "/projects.php?display=true")
        .toPromise()
        .then(x => x.json() as any[])
        .catch(this.handleError);
    }
    public getVolunteers(project){
        let headers = new Headers({ 'Content-Type': 'application/json'});
		let options = new RequestOptions({ headers: headers});

        return this.http
        .get(this._apiUrl + "/userstable.php?projvols=true"+
        "&project=" + encodeURIComponent(project), options)
        .toPromise()
        .then(x => x.json() as any[])
        .catch(this.handleError);
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