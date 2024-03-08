import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VendorDashboardService {
  constructor(private _http: HttpClient) {}

  getVendorData(vendorToken: string): Observable<any> {
    // Set up the headers with the authorization token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${vendorToken}`,
    });

    // Include the headers in the HTTP request options
    const requestOptions = {
      headers: headers,
    };

    // Make the GET request with the provided token in the headers
    return this._http.get(
      'http://localhost:8000/vendor/get-data',
      requestOptions
    );
  }

  getAllProducts(vendorToken: string): Observable<any> {
    // Set up the headers with the authorization token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${vendorToken}`,
    });

    // Include the headers in the HTTP request options
    const requestOptions = {
      headers: headers,
    };

    // Make the GET request with the provided token in the headers
    return this._http.get('http://localhost:8000/products', requestOptions);
  }

  getSingleProduct(vendorToken: string, productId: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${vendorToken}`,
    });
    const requestOptions = {
      headers: headers,
    };

    return this._http.get(
      `http://localhost:8000/products/${productId}`,
      requestOptions
    );
  }

  editProduct(
    productId: string,
    inputData: object,
    vendorToken: string
  ): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${vendorToken}`,
    });
    const requestOptions = {
      headers: headers,
    };

    return this._http.patch(
      `http://localhost:8000/products/${productId}`,
      inputData,
      requestOptions
    );
  }

  deleteProduct(vendorToken: string, productId: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${vendorToken}`,
    });
    const requestOptions = {
      headers: headers,
    };

    return this._http.delete(
      `http://localhost:8000/products/${productId}`,
      requestOptions
    );
  }

  createProduct(inputData: object, vendorToken: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${vendorToken}`,
    });
    const requestOptions = {
      headers: headers,
    };

    return this._http.post(
      `http://localhost:8000/products`,
      inputData,
      requestOptions
    );
  }
}
