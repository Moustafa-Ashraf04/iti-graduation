import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  constructor(private _http: HttpClient, private _router: Router) {
    if (localStorage.getItem('userToken') != null) {
      this.userToken;
    }
  }

  userToken: any = new BehaviorSubject(null);



  saveUserData() {
    const userToken = localStorage.getItem('vendorToken');
    this.userToken.next(userToken);
    console.log(userToken);
  }

  signOutUser() {
    localStorage.removeItem('userToken');
    this.userToken.next(null);
    this._router.navigate(['/login']);
  }


  loginUser(loginData: any): Observable<any> {
    return this._http.post('http://localhost:8000/user/login', loginData);
  }


  signupUser(signupData: any): Observable<any> {
    return this._http.post(`http://localhost:8000/user/register`, signupData);
  }

}
