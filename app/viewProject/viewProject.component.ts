import { Component, OnInit } from '@angular/core';
import { NonProfitService } from '../repositories/nonprofit-repository.service';
import { LoginComponent } from '../login/login.component';

@Component({
	selector: 'viewProject',
	templateUrl: './app/viewProject/viewProject.component.html',
	styleUrls: ['./app/viewProject/viewProject.component.css']
})

export class ViewProjectComponent implements OnInit {
	projects: any[];
	login: boolean;
	nonprofit: boolean;

	ngDoCheck(){
		this.login = this.nonProfitService.getLogin();
		this.nonprofit = this.nonProfitService.isNonProfit();
	}
	ngOnChange(){
		
	}
	ngOnInit() { 
		this.nonProfitService.getProjects()
			.then( x => {
				this.projects = x;
			});
	}
	email: string;
	constructor(private nonProfitService: NonProfitService ){

		
	}
	signUp(project){
		//this.model = this.loginComponent.model;
		this.email = this.nonProfitService.getEmail();
		console.log(this.email);
		//console.log("email: " + this.model['email']);
		this.nonProfitService.addVolunteer(project);
		//userstable.php?add=true
	}
}