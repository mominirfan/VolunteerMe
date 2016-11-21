import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app',
  templateUrl: './app/app.html',
  styleUrls: [ './app/app.css' ],
})

export class AppComponent { 
	title : string;
  login : boolean;
  nonprofit : boolean;

	constructor(private route: ActivatedRoute, private router: Router){
		this.title = "Hello World";
    this.login = false;
    this.nonprofit = false;
	}

  logout(){
    this.login = false;
  }

  nav(rt: string){
    this.router.navigateByUrl('');
  }
}
