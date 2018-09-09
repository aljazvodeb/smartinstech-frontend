import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';
import { BoardPassData } from '../_models/boardPassData';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BaggageData } from '../_models/baggageData';
import { Airline } from '../_models/airline';
import { InsuranceService } from '../_services/insurance.service';
import { Router } from '@angular/router';
import { AlertService } from '../_services/alert.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-insurance-conclusion',
  templateUrl: './insurance-conclusion.component.html',
  styleUrls: ['./insurance-conclusion.component.css']
})
export class InsuranceConclusionComponent implements OnInit {

  boardPass: BoardPassData;
  baggage: BaggageData;
  airline: Airline;
  eventData: any;
  showEvent: boolean = false;
  loading: boolean = true;
  baggageId: number;
  user: string;
  price: number;
  maxPayout: number;
  dateTimeOfFirstPayout: string;
  selfPayout: boolean = false;


  constructor(
    private data: DataService,
    private insurance: InsuranceService,
    private router: Router,
    private alertService: AlertService,
    private datePipe: DatePipe) { }

  ngOnInit() {
    this.data.currentBoardPass.subscribe(boardPass => this.boardPass = boardPass);

    this.data.currentBaggage.subscribe(baggage => this.baggage = baggage);

    this.airline = this.boardPass.airline;

    if (this.airline !== undefined) {
      console.log('First Name: ' + this.boardPass.name
        + '\nLastName: ' + this.boardPass.surname
        + '\nFrom:: ' + this.boardPass.fromAirport
        + '\nTo: ' + this.boardPass.toAirport
        + '\nFlight Number: ' + this.boardPass.flightNumber
        + '\nDate: ' + this.boardPass.dateOfFlight
        + '\nDevice: ' + this.boardPass);

      console.log('Baggage Number: ' + this.baggage.baggageNumber);
      console.log('Unix time: ' + Math.round(new Date(this.boardPass.dateOfFlight).getTime() / 1000));
      console.log('Normal time: ' + this.datePipe.transform(new Date(Math.round(new Date(this.boardPass.dateOfFlight).getTime() / 1000) * 1000), "dd.MM.yyyy HH:mm"));
    } else {
      this.alertService.error('Incomplete data, try again', true);
      this.router.navigate(['/boardPass']);
    }

  }

  onSubmit() {

    console.log("selfpayout: " + this.selfPayout);

    this.insurance.createInsurance(
      [Number(this.baggage.baggageNumber)],
      //converted to unix format
      Math.round(new Date(this.boardPass.dateOfFlight).getTime() / 1000),
      this.airline.insurancePrice,
      this.airline.maxPayout,
      this.airline.linkToWS,
      this.airline.pathToData,
      this.selfPayout
    );

    this.showEvent = true;

    this.insurance.InsuranceConcluded().then((data) => {
      if (data == null) {
        console.log('there was an error!');
      } else {
        this.loading = false;
        this.eventData = data;
        console.log("baggageId: " + this.eventData.args.baggageId.toNumber());
        this.baggageId = this.eventData.args.baggageId.toNumber();
        console.log("user: " + this.eventData.args.user);
        this.user = this.eventData.args.user;
        console.log("price: " + this.eventData.args.price.toNumber());
        this.price = this.eventData.args.price.toNumber();
        this.price = this.price * 0.000000000000000001;
        console.log("maxPayout: " + this.eventData.args.maxPayout.toNumber());
        this.maxPayout = this.eventData.args.maxPayout.toNumber();
        console.log("dateTimeOfFirstPayout: " + this.eventData.args.dateTimeOfFirstPayout.toNumber());
        this.dateTimeOfFirstPayout = this.datePipe.transform(new Date((this.eventData.args.dateTimeOfFirstPayout.toNumber()) * 1000), "dd.MM.yyyy HH:mm");
        ;

      }
    });
  }

}
