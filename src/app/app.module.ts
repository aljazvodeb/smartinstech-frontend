import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AirlineRegistrationComponent } from './airline-registration/airline-registration.component';
import { AirlineLoginComponent } from './airline-login/airline-login.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AirlineHomeComponent } from './airline-home/airline-home.component';
import { AlertService } from './_services/alert.service';
import { AirlineService } from './_services/airline.service';
import { AuthenticationService } from './_services/authentication.service';
import { AlertComponent } from './_shared/alert/alert.component';
import { NavigationComponent } from './_shared/navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    AirlineRegistrationComponent,
    AirlineLoginComponent,
    AirlineHomeComponent,
    AlertComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    AlertService,
    AirlineService, 
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
