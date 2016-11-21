import { Component, OnInit } from '@angular/core';
import { NonProfitService } from '../repositories/nonprofit-repository.service';
import { Headers, RequestOptions } from '@angular/http'


@Component({
	selector: 'nonprofit-dashboard',
	templateUrl: './app/nonprofit-dashboard/nonprofit-dashboard.component.html',
	styleUrls: ['./app/nonprofit-dashboard/nonprofit-dashboard.component.css']
})

export class NonprofitDashboardComponent implements OnInit {

	title: string;
	projects: any[];
	ngOnInit() { }


	constructor(private nonProfitService: NonProfitService ){
		this.title = "Projects";
		this.nonProfitService.getSpecificProjects("TESTING")
		.then(x => {
			this.projects = x;
			console.log(x);
		});

		
		// for(var i=0; i<this.projects.length;i++){
		// 	nonProfitService.getVolunteers(project?)
		// 	.then( x => {
		// 		this.projects[i].volunteers = x;
		// 	});
		// }
		
	}
	public getProjects(){
		
	}

}