import { Component, OnInit } from '@angular/core';
import { NonProfitService } from '../repositories/nonprofit-repository.service';

@Component({
	selector: 'viewProject',
	templateUrl: './app/viewProject/viewProject.component.html'
})

export class ViewProjectComponent implements OnInit {
	projects: any[];
	ngOnInit() { }
	constructor( private nonProfitService: NonProfitService){
		nonProfitService.getProjects()
		.then( x => {
			this.projects = x;
		});
	}
}