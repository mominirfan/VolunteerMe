import { Component, OnInit } from '@angular/core';
import { NonProfitService } from '../repositories/nonprofit-repository.service';
import { LoginComponent } from '../login/login.component';

@Component({
	selector: 'viewProject',
	templateUrl: './app/viewProject/viewProject.component.html',
})

export class ViewProjectComponent implements OnInit {
	projects: any[];
	login: boolean;
	nonprofit: boolean;

	ngDoCheck(){
		this.login = this.nonProfitService.getLogin();
		this.nonprofit = this.nonProfitService.isNonProfit();
	}

	ngOnInit() { }
	email: string;
	constructor(private nonProfitService: NonProfitService ){

		nonProfitService.getProjects()
		.then( x => {
			this.projects = x;
		});
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