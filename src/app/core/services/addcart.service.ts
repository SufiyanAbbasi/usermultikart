import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Topcollection } from '../interfaces/topcollection';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class addcart {
  private cartItems: Topcollection[] = [];
  private cartSubject: BehaviorSubject<Topcollection[]> = new BehaviorSubject<Topcollection[]>([]);


  constructor() { }

  getCart(): Observable<Topcollection[]> {
    return this.cartSubject.asObservable();
  }

  addToCart(product: Topcollection) {
    this.cartItems.push(product);
    this.cartSubject.next([...this.cartItems]);
  }
  getCartItems(): Observable<Topcollection[]> {
    return this.cartSubject.asObservable();
  }
  
  // removeItem(product: Topcollection): void {
  //   this.cartItems = this.cartItems.filter(item => item !== product);
  //   this.cartSubject.next([...this.cartItems]);
  // }
  removeItem(product: Topcollection): void {
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
