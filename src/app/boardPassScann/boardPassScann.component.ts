import { BoardPassData } from '../_models/boardPassData';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Result } from '@zxing/library';

@Component ({
  selector: 'app-board-pass-component',
  templateUrl: 'boardPassScann.component.html',
  styleUrls: ['./boardPassScann.component.scss']
})
export class BoardPassScannComponent implements OnInit {

  show = true;
  formData = new BoardPassData();
  deviceId: string;

  formText = 'Please check, (if needed) edit your information and add Date of flight';
  errorText: string;

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  changeView() {
    this.show = !this.show;
  }

  onSubmit() {
    console.log('First Name: ' + this.formData.name
                + '\nLastName: ' + this.formData.surname
                + '\nFrom:: ' + this.formData.fromAirport
                + '\nTo: ' + this.formData.toAirport
                + '\nFlight Number: ' + this.formData.flightNumber
                + '\nDate: ' + this.formData.dateOfFlight
              + '\nDevice: ' + this.deviceId );
    // if ( this.formData.)
    // proveri gi site dali se vneseni
    this.router.navigate(['/baggage', this.deviceId]);


  }

  handleDataFormResult(formData) {
    if (!formData) {
      this.formText = 'Unable to scan your data please fill this form';
    } else {
      this.formData = formData;

    }
    this.changeView();

  }

  handleCurrentDeviceId(deviceId) {
    console.log(deviceId);
    this.deviceId = deviceId;
  }


}
