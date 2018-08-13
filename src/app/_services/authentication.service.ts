import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {

  readonly rootUrl = 'https://smartinstech-server-api.herokuapp.com';

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>(this.rootUrl + '/api/airlines/login', { username: username, password: password })
      .pipe(map(airline => {
        
        
          return airline;
        }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentAirline');
  }
}
