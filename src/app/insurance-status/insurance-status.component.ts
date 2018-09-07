import { BaggageData } from './../_models/baggageData';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../_services/alert.service';
import { AuthenticationService } from '../_services/authentication.service';
import { DataService } from '../_services/data.service';


@Component({
  selector: 'app-insurance-status',
  templateUrl: './insurance-status.component.html',
  styleUrls: ['./insurance-status.component.css']
})
export class InsuranceStatusComponent implements OnInit {
  showScanner = false;

  formData = new BaggageData();
  show = false;
  text: string;
  errorText: string;
  showStatus = false;
  baggage: BaggageData;


  constructor(private formBuilder: FormBuilder, private data: DataService) {}

  ngOnInit() {
    //data from scanner
    this.data.currentBaggage.subscribe(baggage => this.baggage = baggage);
    console.log('Baggage Number: ' + this.baggage.baggageNumber);
 }

 activateScanner() {
  this.showScanner = !this.showScanner;
 }

 onSubmit() {
  if (this.formData.baggageNumber === undefined) {
    this.errorText = '*Pease write your baggage number';
  } else if (this.formData.baggageNumber.length < 10) {
    this.errorText = '*Baggage number has to be 10 digits';
  } else {
    this.errorText = undefined;
    console.log('Baggage Number: ' + this.formData.baggageNumber);
    // this.router.navigate(['/insure']);
    this.showStatus = true;
  }
}

 handleResult(result) {
  if (result) {
    this.formData = result;
  } else {
    this.text = 'Unable to scan, please enter your Baggage number';
  }

   this.show = !this.show;
 }

}
