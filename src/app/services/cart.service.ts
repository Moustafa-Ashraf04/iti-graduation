import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = [];
  constructor() {}
  addToCart(product: any) {
    this.cartItems.push(product);
  }

  getItems() {
    return this.cartItems;
  }
}
