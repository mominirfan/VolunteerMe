import { Component, OnInit } from '@angular/core';
import { NonProfitService } from '../repositories/nonprofit-repository.service';
import { Router, RouterModule } from '@angular/router';

@Component({
	selector: 'postProject',
	templateUrl: './app/postProject/postProject.component.html',
	styleUrls: ['./app/postProject/postProject.component.css']
})

export class PostProjectComponent implements OnInit {

	project: any = {};
	ngOnInit() { }
	constructor(private nonProfitService: NonProfitService, private router: Router){

	}
	submit(){
		this.nonProfitService.postProject(this.project)
			.then(() =>{
				this.router.navigateByUrl('nonprofit-dashboard');
		});
	}

	
}