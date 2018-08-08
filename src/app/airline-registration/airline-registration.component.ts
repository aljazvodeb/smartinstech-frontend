import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Airline } from '../airline';
import { AirlineService } from '../airline.service';
import { Router } from "@angular/router";




@Component({
  selector: 'app-airline-registration',
  templateUrl: './airline-registration.component.html',
  styleUrls: ['./airline-registration.component.css']
})
export class AirlineRegistrationComponent implements OnInit {

  airline:Airline;

  constructor(private airlineService:AirlineService, private router: Router) { }

  ngOnInit() {
  }


  onSubmit(form:NgForm) {
    form.value.name = form.value.company;
    this.airlineService.registerAirline(form.value)
    .subscribe();
    this.router.navigate(['/airline/login']);
  }
}
