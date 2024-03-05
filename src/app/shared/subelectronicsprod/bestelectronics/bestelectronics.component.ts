import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faShoppingCart, faMagnifyingGlass, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { Topcollection } from '../../../core/interfaces/topcollection';
import { addcart } from '../../../core/services/addcart.service';
import { CompareService } from '../../../core/services/compare.service';


@Component({
  selector: 'app-bestelectronics',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, CommonModule],
  templateUrl: './bestelectronics.component.html',
  styleUrl: './bestelectronics.component.css'
})
export class BestelectronicsComponent {
  star = faStar
  cart = faShoppingCart
  search = faMagnifyingGlass
  heart = faHeart
  compare = faCodeCompare
 
  product!: Topcollection[];
  item!: Topcollection;
  constructor(private cartService: addcart, private compareService: CompareService) { }
  ngOnInit(): void {

  }

 
  bestsellerelectronics: Topcollection[] = [
    {
      id: 1,
      mainimg: "../../../assets/images/electronics/el7.jpg",
      name: 'Electronics 1',
      newprice: '$45.00 ',
      oldprice: '$75.00',
      quantity: 1,
      totalPrice: '$45.00 ',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      secondaryimg: [],
      dress: '',
      
    },
    {
      id: 2,
      mainimg: "../../../assets/images/electronics/el8.jpg",
      name: 'Electronics 2',
      newprice: '$287.00 ',
      oldprice: '$410.00',
      quantity: 1,
      totalPrice: '$287.00 ',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      secondaryimg: [],
      dress: '',
    },
    {
      id: 3,
      mainimg: "../../../assets/images/electronics/el9.jpg",
      name: 'Electronics 3',
      newprice: '$49.00 ',
      oldprice: '$98.00',
      quantity: 1,
      totalPrice: '$49.00 ',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      secondaryimg: [],
      dress: '',
    },
    
    {
      id: 4,
      mainimg: "../../../assets/images/electronics/el10.jpg",
      name: 'Electronics 4',
      newprice: '$93.00 ',
      oldprice: '$155.00',
      quantity: 1,
      totalPrice: '$93.00 ',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      secondaryimg: [],
      dress: '',
    },
    {
      id: 5,
      mainimg: "../../../assets/images/electronics/el11.jpg",
      name: 'Electronics 5',
      newprice: '$196.00 ',
      oldprice: '$289.00',
      quantity: 1,
      totalPrice: '$196.00 ',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      secondaryimg: [],
      dress: '',
    },
    {
      id: 6,
      mainimg: "../../../assets/images/electronics/el12.jpg",
      name: 'Electronics 6',
      newprice: '$198.00 ',
      oldprice: '$330.00',
      quantity: 1,
      totalPrice: '$198.00 ',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      secondaryimg: [],
      dress: '',
    },

  
    {
      id: 7,
      mainimg: "../../../assets/images/electronics/el13.jpg",
      name: 'Electronics 7',
      newprice: '$77.00 ',
      oldprice: '$129.00',
      quantity: 1,
      totalPrice: '$77.00 ',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      secondaryimg: [],
      dress: '',
    },
    {
      id: 8,
      mainimg: "../../../assets/images/electronics/el14.jpg",
      name: 'Electronics 8',
      newprice: '$234.50 ',
      oldprice: '$260.00',
      quantity: 1,
      totalPrice: '$234.00 ',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      secondaryimg: [],
      dress: '',
    },
  

  ]
  addToCart(product: Topcollection) {
    this.cartService.addToCart(product);
  }

  // wishlist 
  showAlert() {
    alert("This Item has been added to wishlist")
  }

  // compare function 
  addToCompare(item: Topcollection): void {
    this.compareService.addToCompare(item);
    alert("Click ok! to compare")
  }

}
