import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { LandingComponent } from './landing/landing.component';
import { CreateVolunteerComponent } from './create-volunteer/create-volunteer.component';
import { CreateNonprofitComponent } from './create-nonprofit/create-nonprofit.component';
import { PostProjectComponent } from './postProject/postProject.component';
import { DiscrimPageComponent } from './discriminator-page/discriminator-page.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule.forRoot([
      { path: '',component: LandingComponent},
      { path: 'create-volunteer', component: CreateVolunteerComponent},
      { path: 'create-nonprofit', component: CreateNonprofitComponent},
      { path: 'postProject', component: PostProjectComponent},
      { path: 'discriminator-page', component: DiscrimPageComponent }
    ]),
    FormsModule
   ],
  declarations: [ 
    AppComponent,
    LandingComponent,
    CreateVolunteerComponent,
    CreateNonprofitComponent,
    PostProjectComponent,
    DiscrimPageComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
