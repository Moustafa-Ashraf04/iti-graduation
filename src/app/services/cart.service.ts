import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: any[] = JSON.parse(localStorage.getItem('cartItems') || '[]');
  cartItems: any[] = [];
  constructor(private http: HttpClient) {}
  addCartToDb(cartItems: any): Observable<any> {
    const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvdXNlci9sb2dpbiIsImlhdCI6MTcwOTkyNTQ1NywiZXhwIjoxNzA5OTI5MDU3LCJuYmYiOjE3MDk5MjU0NTcsImp0aSI6ImhIQkNRN0JJS0RBenk1R1AiLCJzdWIiOiI2IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.qqeV4YnjboaQneg4KEDvj6SwgC3BQk7zeDuaVCFyoAE'; // Replace this with your token
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
      { headers }
    );
  }
  addToCart(item: any) {
    let itemsId = this.items.map((existingItem) => existingItem.id);

    if (itemsId.includes(item.id)) {
      const existingItemIndex = this.items.findIndex(
        (existingItem) => existingItem.id === item.id
      );
      console.log(this.items[existingItemIndex]);

      this.items[existingItemIndex].quantity++;
    } else {
      this.items.push({ ...item, quantity: 1 });
    }
    if (item) {
      console.log(this.items);
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

  getItems() {
    return this.items;
  }
  delete(item: any) {
    this.items = this.items.filter((i) => i.id !== item.id);
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }
  incrementQuantity(id: number) {
    let item = this.items.find((i) => i.id === id);
    if (item) {
      item.quantity++;
    }
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }
  decrementQuantity(id: number) {
    let item = this.items.find((i) => i.id === id);
    if (item) {
      item.quantity--;
    }
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }
  getTotal() {
    return this.items.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }
}
