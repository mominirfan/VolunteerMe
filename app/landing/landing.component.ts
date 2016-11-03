import { Component } from '@angular/core';

import { LandingService } from './landing.service';

@Component({
  selector: 'landing',
  templateUrl: './app/landing/landing.html',
  styleUrls: [ './app/landing/landing.css' ],
  providers: [ LandingService ]
})

export class LandingComponent { 
    
}
