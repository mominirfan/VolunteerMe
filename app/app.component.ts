import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app',
  templateUrl: './app/app.html',
  styleUrls: [ './app/app.css' ],
})

export class AppComponent { 
	title : string;

	constructor(private route: ActivatedRoute, private router: Router){
		this.title = "Hello World";
	}
  nav(rt: string){
    this.router.navigateByUrl('');
  }
}
