import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductcompareService {

  constructor() { }
  private compareItemsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  getCompareItems(): Observable<Product[]> {
    return this.compareItemsSubject.asObservable();
  }

  addToCompare(item: Product): void {
    const currentItems = this.compareItemsSubject.value;
    // Ensure the item is not already in the comparison list
    if (!currentItems.some(i => i.id === item.id)) {
      this.compareItemsSubject.next([...currentItems, item]);
    }
  }

  removeFromCompare(item:Product): void {
    const currentItems = this.compareItemsSubject.value;
    const updatedItems = currentItems.filter(i => i.id !== item.id);
    this.compareItemsSubject.next(updatedItems);
  }
}
