import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Airline } from './airline';
import { Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  readonly rootUrl = 'https://smartinstech-server-api.herokuapp.com';

  airline:Airline;

  constructor(private http : HttpClient) { }

  registerAirline (airline: Airline): Observable<Airline> {
    return this.http.post<Airline>(this.rootUrl + '/api/airlines', airline, httpOptions);
  }

}
