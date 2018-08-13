import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AirlineRegistrationComponent } from './airline-registration/airline-registration.component';
import { AirlineLoginComponent } from './airline-login/airline-login.component';

const routes: Routes = [
  { path: '', redirectTo: '/airline/login', pathMatch: 'full' },
  { path: 'airline/registration', component: AirlineRegistrationComponent },
  { path: 'airline/login', component: AirlineLoginComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }