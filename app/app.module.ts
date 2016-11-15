import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { LandingComponent } from './landing/landing.component';
import { CreateVolunteerComponent } from './create-volunteer/create-volunteer.component';
import { CreateNonprofitComponent } from './create-nonprofit/create-nonprofit.component';
import { PostProjectComponent } from './postProject/postProject.component';
import { NonprofitDashboardComponent } from './nonprofit-dashboard/nonprofit-dashboard.component';
import { DiscrimPageComponent } from './discriminator-page/discriminator-page.component';
import { ViewProjectComponent } from './viewProject/viewProject.component';
import { NonProfitService } from './repositories/nonprofit-repository.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '',component: LandingComponent},
      { path: 'create-volunteer', component: CreateVolunteerComponent},
      { path: 'create-nonprofit', component: CreateNonprofitComponent},
      { path: 'postProject', component: PostProjectComponent},
      { path: 'nonprofit-dashboard', component: NonprofitDashboardComponent },
      { path: 'discriminator-page', component: DiscrimPageComponent },
      { path: 'viewProject', component: ViewProjectComponent}
    ]),
    FormsModule
   ],
  declarations: [ 
    AppComponent,
    LandingComponent,
    CreateVolunteerComponent,
    CreateNonprofitComponent,
    PostProjectComponent,
    NonprofitDashboardComponent,
    DiscrimPageComponent,
    ViewProjectComponent
  ],
  providers: [ NonProfitService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
