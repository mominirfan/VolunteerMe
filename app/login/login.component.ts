import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NonProfitService } from '../repositories/nonprofit-repository.service';

@Component({
	selector: 'login',
	templateUrl: './app/login/login.component.html',
})

export class LoginComponent implements OnInit {
	model: any = {};
    loading = false;

    constructor(
        private router: Router, private nonProfitService: NonProfitService
	) { }
	ngOnInit() { }
	getModel() {
		
		return this.model;
	}
	submit(){
		this.nonProfitService.setEmail(this.model);
		this.nonProfitService.setLogin(true);
		console.log("In login, email = "+ this.nonProfitService.getEmail());
		//this.router.navigateByUrl('');
	}
}