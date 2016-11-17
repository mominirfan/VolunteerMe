import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'nonprofit-dashboard',
	templateUrl: './app/nonprofit-dashboard/nonprofit-dashboard.component.html',
	styleUrls: ['./app/nonprofit-dashboard/nonprofit-dashboard.component.css']
})

export class NonprofitDashboardComponent implements OnInit {

	title: string;

	ngOnInit() { }

	constructor(){
		this.title = "Projects";
	}

}