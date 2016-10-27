import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'create-volunteer',
	templateUrl: './app/create-volunteer/create-volunteer.component.html'
})

export class CreateVolunteerComponent implements OnInit {
	title : string;
	volunteer: any;

	ngOnInit() { }
	constructor(){
		this.title = "Volunteer Account Creation";

		this.volunteer = 5;

		
		

	}
}