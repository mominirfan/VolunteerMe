import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'discriminator-page',
  templateUrl: './app/discriminator-page/discriminator-page.html',
  styleUrls: [ './app/discriminator-page/discriminator-page.css' ]
})

export class DiscrimPageComponent {
  constructor(private route: ActivatedRoute, private router: Router){

  }
  nav(rt: string){
    this.router.navigateByUrl('');
  }

}
