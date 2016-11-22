import { Component, OnInit } from '@angular/core';
import { CreateVolunteerComponent } from '../create-volunteer/create-volunteer.component';
import { Headers, RequestOptions } from '@angular/http'
import { NonProfitService } from '../repositories/nonprofit-repository.service';
import { NonprofitDashboardComponent } from '../nonprofit-dashboard/nonprofit-dashboard.component';

@Component({
	selector: 'create-nonprofit',
	templateUrl: './app/create-nonprofit/create-nonprofit.component.html',
	styleUrls: ['./app/create-nonprofit/create-nonprofit.component.css']
})

export class CreateNonprofitComponent implements OnInit {
	title: string;
	nonprofit: any = {};

	ngOnInit() { }
	constructor(private nonProfitService: NonProfitService){

		this.title = "Create Non-Profit Account";
	}
	submit(){
		
		this.nonProfitService.postNonProfit(this.nonprofit);
		this.nonProfitService.setEmail(this.nonprofit);
	}
}