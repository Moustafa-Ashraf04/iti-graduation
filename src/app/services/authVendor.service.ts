import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthVendor {
  constructor(private _http: HttpClient, private _router: Router) {
    if (localStorage.getItem('vendorToken') != null) {
      this.vendorData;
    }
  }

  // to listen always and send anychanges happens to the subscriber
  vendorData: any = new BehaviorSubject(null);

  saveVendorData() {
    // let encodedToken = JSON.stringify(localStorage.getItem('token'));
    // let decodedToken = jwtDecode(encodedToken);
    // to set the value
    // this.vendorData.next(decodedToken);
    // console.log(this.userData);

    const vendorToken = localStorage.getItem('vendorToken');
    this.vendorData.next(vendorToken);
    console.log(vendorToken);
  }

  signOut() {
    localStorage.removeItem('vendorToken');
    this.vendorData.next(null);
    this._router.navigate(['/vendor/login']);
  }

  login(loginData: any): Observable<any> {
    return this._http.post('http://localhost:8000/vendor/login', loginData);
  }

  singupVendor(signupData: any): Observable<any> {
    return this._http.post(`http://localhost:8000/vendor/register`, signupData);
  }
}

// will add here if we want to check on something about the vendor (maybe)
