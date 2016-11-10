import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'login',
	templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
	model: any = {};
    loading = false;

    constructor(
        private router: Router
	) { }
	ngOnInit() { }
}