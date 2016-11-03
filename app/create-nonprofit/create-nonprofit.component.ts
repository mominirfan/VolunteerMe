import { Component, OnInit } from '@angular/core';
import { CreateVolunteerComponent } from '../create-volunteer/create-volunteer.component';

@Component({
	selector: 'create-nonprofit',
	templateUrl: './app/create-nonprofit/create-nonprofit.component.html',
	styleUrls: ['./app/create-nonprofit/create-nonprofit.component.css']
})

export class CreateNonprofitComponent implements OnInit {
	title: string;
	nonprofit: any;

	ngOnInit() { }
	constructor(){
		this.title = "Create Non-Profit Account";
		this.nonprofit = 6;
	}
}