import { BaggageScannComponent } from './baggageScann/baggageScann.component';
import { BoardPassScannComponent } from './boardPassScann/boardPassScann.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AirlineRegistrationComponent } from './airline-registration/airline-registration.component';
import { AirlineLoginComponent } from './airline-login/airline-login.component';
import { UserInsureComponent } from './user-insure/user-insure.component';
import { AirlineHomeComponent } from './airline-home/airline-home.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: 'airline', component: AirlineHomeComponent, canActivate: [AuthGuard] },
  { path: 'airline/registration', component: AirlineRegistrationComponent },
  { path: 'airline/login', component: AirlineLoginComponent },
  { path: 'insure', component: UserInsureComponent },
  { path: 'boardPass', component: BoardPassScannComponent },
  {
    path: 'baggage/:cameraId',
    component: BaggageScannComponent,
  },
  // otherwise redirect to home
  { path: '**', redirectTo: 'boardPass' }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }