import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private http: HttpClient) {}

  // signup as a user function url from api
  signupUser(userData: any): Observable<any> {
    return this.http.post(
      `https://api.themoviedb.org/3/movie/popular?api_key=cb7ebebc41df2761940edae9ddc89d88`,
      userData
    );
  }
  // signup as a vendor function url from api
  signupVendor(vendorData: object): Observable<any> {
    return this.http.post('url', vendorData);
  }
  // signin function url from api
  signin(loginData: object): Observable<any> {
    return this.http.post('url', loginData);
  }
}
