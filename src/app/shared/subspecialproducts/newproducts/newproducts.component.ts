import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faShoppingCart, faMagnifyingGlass, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { Topcollection } from '../../../core/interfaces/topcollection';
import { addcart } from '../../../core/services/addcart.service';
import { CompareService } from '../../../core/services/compare.service';
import { Cartitem } from '../../../core/interfaces/cartitem';

@Component({
  selector: 'app-newproducts',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterLink, RouterOutlet],
  templateUrl: './newproducts.component.html',
  styleUrl: './newproducts.component.css'
})

export class NewproductsComponent {
  star = faStar
  cart = faShoppingCart
  search = faMagnifyingGlass
  heart = faHeart
  compare = faCodeCompare

  // product!: Topcollection[];
  product!: any[];
  constructor(private cartService: addcart, private compareService: CompareService) { }
  ngOnInit(): void {

  }
  list: any = [
    {
      id: 1,
      mainimg: "../../../assets/images/tc2.jpg",
      dress: 'Trim Dress',
      newprice: '$87.00 ',
      oldprice: '$145.00',
      totalPrice: '$87.00',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      quantity: 1,

    },
    {
      id: 2,
      mainimg: "../../../assets/images/tc10.jpg",
      dress: 'Belted Top',
      newprice: '$49.00 ',
      oldprice: '$98.00',
      totalPrice: '$49.00',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      quantity: 1,

    },
    {
      id: 3,
      mainimg: "../../../assets/images/tc12.jpg",
      dress: 'V-neck Dress',
      newprice: '$94.50 ',
      oldprice: '$315.00',
      totalPrice: '$94.00',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      quantity: 1,

    },
    {
      id: 4,
      mainimg: "../../../assets/images/tc6.jpg",
      dress: 'Maxi Dress',
      newprice: '$159.00 ',
      oldprice: '$266.00',
      totalPrice: '$159.00',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      quantity: 1,

    },
    {
      id: 5,
      mainimg: "../../../assets/images/tc13.jpg",
      dress: 'Fit Flare Dress',
      newprice: '$133.00 ',
      oldprice: '$148.00',
      totalPrice: '$133.00',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      quantity: 1,


      
    },
    {
      id: 6,
      mainimg: "../../../assets/images/tc1.jpg",
      dress: 'Midi Dress',
      newprice: '$240.00 ',
      oldprice: '$400.00',
      totalPrice: '$240.00',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      quantity: 1,


    },
    {
      id: 7,
      mainimg: "../../../assets/images/tc14.jpg",
      dress: ' Tulip  Dress',
      newprice: '$130.00 ',
      oldprice: '$145.00',
      totalPrice: '$130.00',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      quantity: 1,

    },
    {
      id: 8,
      mainimg: "../../../assets/images/tc15.jpg",
      dress: 'Skater Dress',
      newprice: '$126.00 ',
      oldprice: '$210.00',
      totalPrice: '$216.00',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      quantity: 1,
    },


  ]

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
  // wishlist 
  showAlert() {
    alert("This Item has been added to wishlist")
  }

  // compare function 
  addToCompare(item: any): void {
    this.compareService.addToCompare(item);
    alert("Click ok! to compare")
  }
}
