import { Component } from '@angular/core';
import { Topcollection } from '../../core/interfaces/topcollection';
import { addcart } from '../../core/services/addcart.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addcart',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule, FormsModule],
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

  removeItem(item: Topcollection): void {
    this.cartService.removeItem(item);
  }

  decreaseQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateTotalPrice(item);
    }
  }

  increaseQuantity(item: any): void {
    item.quantity++;
    this.updateTotalPrice(item);
  }

  updateTotalPrice(item: any): void {
    item.totalPrice = (parseFloat(item.newprice.replace('$', '')) * item.quantity).toFixed(2);
  }


}
