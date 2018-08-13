import { Component, OnInit } from '@angular/core';
import { Airline } from '../_models/airline';


@Component({
  selector: 'app-airline-home',
  templateUrl: './airline-home.component.html',
  styleUrls: ['./airline-home.component.css']
})
export class AirlineHomeComponent implements OnInit {
  currentAirline: Airline;

  constructor() {
    this.currentAirline = JSON.parse(localStorage.getItem('currentAirline'));
  }

  ngOnInit() {
  }

}
