import { BaggageData } from './../_models/baggageData';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../_services/alert.service';
import { AuthenticationService } from '../_services/authentication.service';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-insurance-claim',
  templateUrl: './insurance-claim.component.html',
  styleUrls: ['./insurance-claim.component.css']
})
export class InsuranceClaimComponent implements OnInit {
  showScanner = false;

  formData = new BaggageData();
  show = false;
  text: string;
  errorText: string;
  selfPayout: boolean;
  showClaim: boolean;
  baggage: BaggageData;

  constructor(private formBuilder: FormBuilder, private data: DataService) {}

  ngOnInit() {
    this.showClaim = false;

    //data from scanner
    this.data.currentBaggage.subscribe(baggage => this.baggage = baggage);
    console.log('Baggage Number: ' + this.baggage.baggageNumber);

  }

  activateScanner() {
    //  console.log('active');
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

      if (localStorage.getItem('selfPayout') === 'true') {
        this.selfPayout = true;
        this.showClaim = true;
        localStorage.removeItem('selfPayout');
      } else {
        this.selfPayout = false;
        this.showClaim = true;
        localStorage.removeItem('selfPayout');
      }
    }
  }

  onClaim() {
    console.log('sine');
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
