import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'create-nonprofit',
	templateUrl: './app/create-nonprofit/create-nonprofit.component.html'
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