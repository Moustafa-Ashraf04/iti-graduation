import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  getAllProducts(): Observable<any> {
    return this.http.get('http://localhost:8000/products');
  }
  getSingleProduct(id: number): Observable<any> {
    return this.http.get(`http://localhost:8000/products/${id}`);
  }
  getRecommendedProducts(): Observable<any> {
    return this.http.get('http://localhost:8000/products/recommended/4');
  }
}
