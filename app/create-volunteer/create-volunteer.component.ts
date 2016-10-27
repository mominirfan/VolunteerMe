import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'create-volunteer',
	templateUrl: './app/create-volunteer/create-volunteer.component.html'
})

export class CreateVolunteerComponent implements OnInit {
	title : string;

	ngOnInit() { }
	constructor(){
		this.title = "Volunteer Account Creation";
		

	}
}