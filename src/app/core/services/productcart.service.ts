import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductcartService {

  constructor() { }
  private cartItems: Product[] = [];
  private cartSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);



  getCart(): Observable<Product[]> {
    return this.cartSubject.asObservable();
  }

  addToCart(product: Product) {
    const itemCopy = { ...product }; // Create a copy of the product
    this.cartItems.push(itemCopy); // Add the copy to the cartItems array
    this.cartSubject.next([...this.cartItems]);
}


  getCartItems(): Observable<Product[]> {
    return this.cartSubject.asObservable();
  }

  removeItem(product: Product): void {
    const index = this.cartItems.findIndex(item => item.id === product.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.cartSubject.next([...this.cartItems]);
    }
  }
  getCartItemCount(): Observable<number> {
    return this.cartSubject.pipe(map(items => items.length));
  }
}
