import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NonProfitService } from './repositories/nonprofit-repository.service';

@Component({
  selector: 'app',
  templateUrl: './app/app.html',
  styleUrls: [ './app/app.css' ],
})

export class AppComponent { 
	title : string;
  login : boolean;
  nonprofit : boolean;
  
  ngOnInit(){
    
  }
  ngDoCheck(){
    this.login = this.nonProfitService.getLogin();
    this.nonprofit = this.nonProfitService.isNonProfit();
  }
	constructor(private route: ActivatedRoute, private router: Router, private nonProfitService: NonProfitService){
		this.title = "Hello World";
    //this.login = false;
    this.login = this.nonProfitService.getLogin();
    this.nonprofit = false;
	}

  logout(){
    this.nonProfitService.setLogin(false);
    this.login = false;
  }

  nav(rt: string){
    this.router.navigateByUrl('');
  }
}
