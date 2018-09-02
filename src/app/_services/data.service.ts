import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { BoardPassData } from '../_models/boardPassData';
import { BaggageData } from '../_models/baggageData';
import { Airline } from '../_models/airline';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  defaultBoardPass = new BoardPassData;
  defaultBaggage = new BaggageData;
  defaultAirline = new Airline;

  private boardPassSource = new BehaviorSubject<BoardPassData>(this.defaultBoardPass);
  currentBoardPass = this.boardPassSource.asObservable();

  private baggageSource = new BehaviorSubject<BaggageData>(this.defaultBaggage);
  currentBaggage = this.baggageSource.asObservable();

  private airlineSource = new BehaviorSubject<Airline>(this.defaultAirline);
  currentAirline = this.airlineSource.asObservable();

  constructor() { }

  sendBoardPass(boardPass: BoardPassData) {
    this.boardPassSource.next(boardPass);
  }

  sendBaggage(baggage: BaggageData) {
    this.baggageSource.next(baggage);
  }

  sendAirline(airline: Airline) {
    this.airlineSource.next(airline);
  }
}
