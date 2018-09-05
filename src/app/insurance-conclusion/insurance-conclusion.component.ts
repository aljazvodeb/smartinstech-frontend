import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';
import { BoardPassData } from '../_models/boardPassData';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BaggageData } from '../_models/baggageData';
import { Airline } from '../_models/airline';

@Component({
  selector: 'app-insurance-conclusion',
  templateUrl: './insurance-conclusion.component.html',
  styleUrls: ['./insurance-conclusion.component.css']
})
export class InsuranceConclusionComponent implements OnInit {

  insureForm: FormGroup;
  boardPass: BoardPassData;
  baggage: BaggageData;
  airline: Airline;

  selfPayout = true; 

  constructor(private data: DataService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.data.currentBoardPass.subscribe(boardPass => this.boardPass = boardPass);
    console.log('First Name: ' + this.boardPass.name
      + '\nLastName: ' + this.boardPass.surname
      + '\nFrom:: ' + this.boardPass.fromAirport
      + '\nTo: ' + this.boardPass.toAirport
      + '\nFlight Number: ' + this.boardPass.flightNumber
      + '\nDate: ' + this.boardPass.dateOfFlight
      + '\nDevice: ' + this.boardPass);

    this.data.currentBaggage.subscribe(baggage => this.baggage = baggage);
    console.log('Baggage Number: ' + this.baggage.baggageNumber);

    this.airline = this.boardPass.airline;

    this.insureForm = this.formBuilder.group({
      flightNumber: this.boardPass.flightNumber,
      baggageNumber: this.baggage.baggageNumber,
      name: this.airline.name,
      insurancePrice: this.airline.insurancePrice,
      maxPayout: this.airline.maxPayout
    });
  }

  onSubmit() {

  }

}
