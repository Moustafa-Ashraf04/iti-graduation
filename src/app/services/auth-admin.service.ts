import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthAdminService {
  constructor(private _http: HttpClient, private _router: Router) {
    if (localStorage.getItem('adminToken') != null) {
      this.adminData;
    }
  }

  adminData: any = new BehaviorSubject(null);

  saveVendorData() {
    const adminToken = localStorage.getItem('adminToken');
    this.adminData.next(adminToken);

    console.log(adminToken);
  }

  loginAdmin(loginData: any): Observable<any> {
    return this._http.post('http://localhost:8000/admin/login', loginData);
  }

  signOutAdmin() {
    localStorage.removeItem('adminToken');
    this.adminData.next(null);
    this._router.navigate(['/admin/login']);
  }
}
