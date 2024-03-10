import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  //get it from database
  cart!: any;
  private items: any[] = [];

  setItems(items: any) {
    this.items = items;
  }

  setCart(cart) {
    this.cart = cart;
  }

  cartItems: any[] = [];
  constructor(private http: HttpClient) {}

  //add cart to database
  addCartToDb(cartItems: any): Observable<any> {
    const token = localStorage.getItem('userToken') || '';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    const formattedCartItems = cartItems.map((item: any) => {
      return {
        productId: item.productId,
        quantity: item.quantity,
      };
    });

    return this.http.post(
      'http://127.0.0.1:8000/user/cart',
      { products: formattedCartItems },
      { headers },
    );
  }
  //update cart db
  updateCartToDb(newCart): Observable<any> {
    const token = localStorage.getItem('userToken') || '';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return this.http.put('http://127.0.0.1:8000/user/cart/1', newCart, {
      headers,
    });
  }

  //delete from db

  deleteFromDb(deletedItem) {
    const token = localStorage.getItem('userToken') || '';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return this.http.delete(`http://127.0.0.1:8000/user/cart/${this.cart.id}`, {
      headers,
      body: deletedItem,
    });
  }

  addToCart(item: any) {
    let itemsId = this.items.map((existingItem) => existingItem.id);

    if (itemsId.includes(item.id)) {
      const existingItemIndex = this.items.findIndex(
        (existingItem) => existingItem.id === item.id,
      );
      console.log(this.items[existingItemIndex]);

      this.items[existingItemIndex].quantity++;
    } else {
      this.items.push({ ...item, quantity: 1 });
    }
    if (item) {
      this.cartItems = [];
      this.items.forEach((item) => {
        this.cartItems.push({
          productId: item.id,
          quantity: item.quantity,
        });
        console.log(this.cartItems);

        this.addCartToDb(this.cartItems).subscribe({
          next: (res: any) => {
            console.log(res);
          },
          error: (error) => {
            console.log(error, 'errors');
          },
        });
      });
    }
  }
  getCartFromDb(): Observable<any> {
    const token = localStorage.getItem('userToken') || '';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any>('http://localhost:8000/user/cart', { headers });
  }

  // getItems() {
  //   return this.items;
  // }

  //delete from db
  delete(item: any) {
    let deletedItem = {
      products: [{ productId: item.id }],
    };
    this.deleteFromDb(deletedItem).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (error) => {
        console.log(error, 'errors');
      },
    });
  }
  incrementQuantity(id: number) {
    let item = this.items.find((i) => i.id === id);

    let transaction = {
      operation: 'add',
      products: [{ productId: id }],
    };

    this.updateCartToDb(transaction).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (error) => {
        console.log(error, 'errors');
      },
    });
    if (item) {
      item.quantity++;
    }
    //increment in db
  }
  decrementQuantity(id: number) {
    let item = this.items.find((i) => i.id === id);
    let transaction = {
      operation: 'subtract',
      products: [{ productId: id }],
    };

    this.updateCartToDb(transaction).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (error) => {
        console.log(error, 'errors');
      },
    });
    if (item) {
      item.quantity--;
    }
    //decrement from db
  }
  getTotal() {
    return this.items.reduce((acc, item) => {
      if (item.discount > 0) {
        return acc + item.price * item.quantity * item.discount;
      } else return acc + item.price * item.quantity;
    }, 0);
  }
}
