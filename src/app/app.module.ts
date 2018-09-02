import { QRScannerComponent } from './QRScanner/QRScanner.component';
import { BoardPassScannComponent } from './boardPassScann/boardPassScann.component';
import { BarcodeScannerComponent } from './BarCodeScanner/barCodeScanner.component';
import { BaggageScannComponent } from './baggageScann/baggageScann.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AirlineRegistrationComponent } from './airline-registration/airline-registration.component';
import { AirlineLoginComponent } from './airline-login/airline-login.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AirlineHomeComponent } from './airline-home/airline-home.component';
import { AlertService } from './_services/alert.service';
import { AirlineService } from './_services/airline.service';
import { AuthenticationService } from './_services/authentication.service';
import { AlertComponent } from './_shared/alert/alert.component';
import { NavigationComponent } from './_shared/navigation/navigation.component';
import { AuthGuard } from './_guards/auth.guard';
import { ZXingScannerModule } from './_modules/zxing-scanner/zxing-scanner.module';
import { InsuranceStatusComponent } from './insurance-status/insurance-status.component';
import { InsuranceConclusionComponent } from './insurance-conclusion/insurance-conclusion.component';
import { InsuranceClaimComponent } from './insurance-claim/insurance-claim.component';


@NgModule({
  declarations: [
    AppComponent,
    AirlineRegistrationComponent,
    AirlineLoginComponent,
    AirlineHomeComponent,
    AlertComponent,
    NavigationComponent,
    BaggageScannComponent,
    BarcodeScannerComponent,
    BoardPassScannComponent,
    QRScannerComponent,
    InsuranceStatusComponent,
    InsuranceConclusionComponent,
    InsuranceClaimComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ZXingScannerModule.forRoot(),
    FormsModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AirlineService, 
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
