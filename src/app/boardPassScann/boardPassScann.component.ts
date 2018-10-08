import { Airline } from './../_models/airline';
import { AirlineService } from './../_services/airline.service';
import { BoardPassData } from '../_models/boardPassData';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Result } from '@zxing/library';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-board-pass-component',
  templateUrl: 'boardPassScann.component.html',
  styleUrls: ['./boardPassScann.component.scss']
})
export class BoardPassScannComponent implements OnInit {
  show = true;
  formData = new BoardPassData();
  deviceId: string;

  showScanner = false;

  formText = 'Please check, (if needed) edit your information and add Date of flight';
  errorText: string;

  airlines: Array<Airline>;
  fullInfoAirlines: Array<Airline> = [];

  id: string;

  airline: Object;

  constructor(
    private router: Router,
    private airlineService: AirlineService,
    private data: DataService
  ) {}

  ngOnInit() {
    this.airlineService.getAll().subscribe(air => {
      this.airlines = air;
      for (const entry of this.airlines) {
        if (entry.name !== undefined) {
          this.fullInfoAirlines.push(entry);
        }
      }
    });
  }

  changeView() {
    this.show = !this.show;
  }

  onSubmit() {
    if (this.formData.name === undefined) {
      this.errorText = '*Please enter first name';
    } else if (this.formData.surname === undefined) {
      this.errorText = '*Please enter last name';
    } else if (this.formData.fromAirport === undefined) {
      this.errorText = '*Please enter the airport from which you are flying';
    } else if (this.formData.toAirport === undefined) {
      this.errorText = '*Please enter at which airport are you arriving';
    } else if (this.formData.flightNumber === undefined) {
      this.errorText = '*Please enter your flight number';
    } else if (this.formData.dateOfFlight === undefined ) {
      this.errorText = '*Please enter the date of your flight';
    } else if (this.formData.airline === null) {
      this.errorText = '*Please enter your airline';
    } else {
      this.data.sendBoardPass(this.formData);
      this.router.navigate(['/baggage', this.deviceId]);
    }

    this.router.navigate(['/baggage', this.deviceId]);
    this.airlineService.getById(this.id).subscribe(air => {
      this.formData.airline = air as Airline;

      console.log(
        'First Name: ' +
          this.formData.name +
          '\nLastName: ' +
          this.formData.surname +
          '\nFrom:: ' +
          this.formData.fromAirport +
          '\nTo: ' +
          this.formData.toAirport +
          '\nFlight Number: ' +
          this.formData.flightNumber +
          '\nDate: ' +
          this.formData.dateOfFlight +
          '\nAirline: ' +
          this.formData.airline
        );
    });

    // if ( this.formData.)
    // proveri gi site dali se vneseni

    // send dataForm to other components
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

  activateScanner() {
    this.showScanner = !this.showScanner;
  }
}
