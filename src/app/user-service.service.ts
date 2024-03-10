import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }



  getUserData(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    const requestOptions = {
      headers: headers,

    };
    const url = `http://localhost:8000/user/get-data`;
    return this.http.get(url, requestOptions);
  }
  getUserOrders(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    const requestOptions = {
      headers: headers,

    };
    const url = `http://localhost:8000/user/orders`;
    return this.http.get(url, requestOptions);
  }
}
