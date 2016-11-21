import { Component, OnInit } from '@angular/core';
import { NonProfitService } from '../repositories/nonprofit-repository.service';

@Component({
	selector: 'create-volunteer',
	templateUrl: './app/create-volunteer/create-volunteer.component.html',
	styleUrls: ['./app/create-volunteer/create-volunteer.component.css']
})

export class CreateVolunteerComponent implements OnInit {
	title : string;
	volunteer: any = {};

	ngOnInit() { }
	constructor(private nonProfitService: NonProfitService){
		this.title = "Volunteer Account Creation";

	}
	submit(){
		console.log(this.volunteer);
		this.nonProfitService.setEmail(this.volunteer);

		this.nonProfitService.post(this.volunteer);

	}
}