import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  search(param: string): Observable<any> {
    return this.http.get(`http://localhost:8000/search?query=${param}`);
  }
}
