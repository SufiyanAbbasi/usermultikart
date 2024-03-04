// compare.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Topcollection } from '../interfaces/topcollection';

@Injectable({
  providedIn: 'root'
})
export class CompareService {
  private compareItemsSubject: BehaviorSubject<Topcollection[]> = new BehaviorSubject<Topcollection[]>([]);

  getCompareItems(): Observable<Topcollection[]> {
    return this.compareItemsSubject.asObservable();
  }

  addToCompare(item: Topcollection): void {
    const currentItems = this.compareItemsSubject.value;
    // Ensure the item is not already in the comparison list
    if (!currentItems.some(i => i.id === item.id)) {
      this.compareItemsSubject.next([...currentItems, item]);
    }
  }

  removeFromCompare(item: Topcollection): void {
    const currentItems = this.compareItemsSubject.value;
    const updatedItems = currentItems.filter(i => i.id !== item.id);
    this.compareItemsSubject.next(updatedItems);
  }
}
