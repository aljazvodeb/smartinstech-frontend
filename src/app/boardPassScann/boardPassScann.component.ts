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


  constructor(private router: Router, private airlineService: AirlineService, private data: DataService) {

  }

  ngOnInit() {
    this.airlineService.getAll().subscribe(air => {
      this.airlines = air;
      //storing airlines with full data
      for (let entry of this.airlines) {
        if (entry.name !== undefined)
          this.fullInfoAirlines.push(entry);
      }
    });
  }

  changeView() {
    this.show = !this.show;
  }

  onSubmit() {
    this.airlineService.getById(this.id).subscribe(air => {
      this.formData.airline = air as Airline;

      console.log('First Name: ' + this.formData.name
        + '\nLastName: ' + this.formData.surname
        + '\nFrom:: ' + this.formData.fromAirport
        + '\nTo: ' + this.formData.toAirport
        + '\nFlight Number: ' + this.formData.flightNumber
        + '\nDate: ' + this.formData.dateOfFlight
        + '\nAirline: ' + this.formData.airline);
    });

    // if ( this.formData.)
    // proveri gi site dali se vneseni

    //send dataForm to other components
    this.data.sendBoardPass(this.formData);

    //this.data.sendAirline(this.airline);


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

  activateScanner() {
    this.showScanner = !this.showScanner;
  }


}
