import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminDashboardService {
  constructor(private _http: HttpClient) {}

  //100
  getAdminData(adminToken: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${adminToken}`,
    });
    const requestOptions = {
      headers: headers,
    };
    return this._http.get(
      'http://localhost:8000/admin/get-all-data',
      requestOptions
    );
  }

  // read all promocodes 100
  getAllPromoCodes(adminToken: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${adminToken}`,
    });

    const requestOptions = {
      headers: headers,
    };

    return this._http.get(
      'http://localhost:8000/admin/promocodes',
      requestOptions
    );
  }

  // add new promo 100
  addPromo(inputData: any, adminToken: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${adminToken}`,
    });
    const requestOptions = {
      headers: headers,
    };

    return this._http.post(
      `http://localhost:8000/admin/promocode/add`,
      inputData,
      requestOptions
    );
  }
  // delete promocodes 100
  deletePromoCode(adminToken: string, promoCodeId: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${adminToken}`,
    });
    const requestOptions = {
      headers: headers,
    };

    return this._http.delete(
      `http://localhost:8000/admin/promocode/delete/${promoCodeId}`,
      requestOptions
    );
  }

  // Categories CRUD
  // create category 100
  addCategory(inputData: any, adminToken: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${adminToken}`,
    });
    const requestOptions = {
      headers: headers,
    };
    return this._http.post(
      `http://localhost:8000/admin/category/create`,
      inputData,
      requestOptions
    );
  }

  // read all categories 100
  getAllCategories(): Observable<any> {
    return this._http.get('http://localhost:8000/categories');
  }

  //update category
  // updateCategory(inputData: string, categoryId: number): Observable<any> {
  //   return this._http.put(
  //     `http://localhost:8000/category/${categoryId}`,
  //     inputData
  //   );
  // }
  // delete category 100%

  // delete category
  deleteCategory(adminToken: string, categoryId: number): Observable<any> {
    3;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${adminToken}`,
    });
    const requestOptions = {
      headers: headers,
    };
    return this._http.delete(
      `http://localhost:8000/admin/category/delete/${categoryId}`,
      requestOptions
    );
  }

  getAllVendors(adminToken: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${adminToken}`,
    });
    const requestOptions = {
      headers: headers,
    };
    return this._http.get(
      `http://localhost:8000/admin/get-all-vendors`,
      requestOptions
    );
  }

  activateVendor(adminToken: any, vendorId: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${adminToken}`,
    });
    const requestOptions = {
      headers: headers,
    };
    return this._http.patch(
      `http://localhost:8000/admin/activate-vendor/${vendorId}`,
      {},
      requestOptions
    );
  }

  suspendVendor(adminToken: string, vendorId: number): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${adminToken}`,
    });
    const requestOptions = {
      headers: headers,
    };
    return this._http.patch(
      `http://localhost:8000/admin/suspend-vendor/${vendorId}`,
      {},
      requestOptions
    );
  }

  getReviews(adminToken: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${adminToken}`,
    });
    const requestOptions = {
      headers: headers,
    };
    return this._http.get(
      `http://localhost:8000/admin/ratings`,
      requestOptions
    );
  }

  deleteReview(adminToken: string, reviewId: number): Observable<any> {
    3;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${adminToken}`,
    });
    const requestOptions = {
      headers: headers,
    };
    return this._http.delete(
      `http://localhost:8000/admin/rating/delete/${reviewId}`,
      requestOptions
    );
  }

  // read payments
  getPaymentMethods(adminToken: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${adminToken}`,
    });

    const requestOptions = {
      headers: headers,
    };

    return this._http.get(
      'http://localhost:8000/admin/payments',
      requestOptions
    );
  }

  // add payment
  addPaymentMethod(inputData: any, adminToken: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${adminToken}`,
    });
    const requestOptions = {
      headers: headers,
    };

    return this._http.post(
      `http://localhost:8000/admin/payment/create`,
      inputData,
      requestOptions
    );
  }

  // delete payment
  deletePaymentMethod(adminToken: string, paymentId: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${adminToken}`,
    });
    const requestOptions = {
      headers: headers,
    };

    return this._http.delete(
      `http://localhost:8000/admin/payment/delete/${paymentId}`,
      requestOptions
    );
  }
}
