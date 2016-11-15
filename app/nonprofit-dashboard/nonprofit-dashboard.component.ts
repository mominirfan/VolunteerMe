import { Component, OnInit } from '@angular/core';
import { NonProfitService } from '../repositories/nonprofit-repository.service';

@Component({
	selector: 'nonprofit-dashboard',
	templateUrl: './app/nonprofit-dashboard/nonprofit-dashboard.component.html',
	styleUrls: ['./app/nonprofit-dashboard/nonprofit-dashboard.component.css']
})

export class NonprofitDashboardComponent implements OnInit {

	title: string;
	nonprofits: any[];
	ngOnInit() { }

	constructor(private nonProfitService: NonProfitService ){
		this.title = "Non-Profit Dashboard";
		nonProfitService.get()
		.then(x => this.nonprofits = x);

	}

}