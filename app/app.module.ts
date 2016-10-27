import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { LandingComponent } from './landing/landing.component';
import { CreateVolunteerComponent } from './create-volunteer/create-volunteer.component';
import { CreateNonprofitComponent } from './create-nonprofit/create-nonprofit.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule.forRoot([
      { path: '',component: LandingComponent},
      { path: 'create-volunteer', component: CreateVolunteerComponent},
      { path: 'create-nonprofit', component: CreateNonprofitComponent}
    ]),
    FormsModule
   ],
  declarations: [ 
    AppComponent,
    LandingComponent,
    CreateVolunteerComponent,
    CreateNonprofitComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
