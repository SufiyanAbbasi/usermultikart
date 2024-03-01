import { Component } from '@angular/core';
import { Topcollection } from '../../core/interfaces/topcollection';
import { addcart } from '../../core/services/addcart.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-addcart',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './addcart.component.html',
  styleUrl: './addcart.component.css'
})
export class AddcartComponent {
  cross = faClose;
  cartItems: Topcollection[] = [];

  constructor(private cartService: addcart) { }

  ngOnInit(): void {
    this.cartService.getCart().subscribe(items => {
      this.cartItems = items;
    });
  }
  // removeItem(item: Topcollection): void {
  //   this.cartItems = this.cartItems.filter(i => i !== item);
  
  // }
  removeItem(item: Topcollection): void {
    this.cartService.removeItem(item);
  }
}
