import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faShoppingCart, faMagnifyingGlass, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { addcart } from '../../core/services/addcart.service';
import { CompareService } from '../../core/services/compare.service';
import { Topcollection } from '../../core/interfaces/topcollection';


@Component({
  selector: 'app-vegetable',
  standalone: true,
  templateUrl: './vegetable.component.html',
  styleUrl: './vegetable.component.css',
  imports: [RouterLink, FontAwesomeModule, CommonModule]
})
export class VegetableComponent {

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

  vegetable: Topcollection[] = [
    {
      id: 1,
      mainimg: "../../../assets/images/vegetable/veg3.jpg",
      name: 'Beetroot',
      newprice: '$31.00 ',
      oldprice: '$35.00',
      quantity: 1,
      totalPrice: '$31.00 ',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      secondaryimg: [],
      dress: '',
    },
    {
      id: 2,
      mainimg: "../../../assets/images/vegetable/veg4.jpg",
      name: 'Cabbage',
      newprice: '$11.00 ',
      oldprice: '$15.00',
      quantity: 1,
      totalPrice: '$11.00 ',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      secondaryimg: [],
      dress: '',
    },
    {
      id: 3,
      mainimg: "../../../assets/images/vegetable/veg5.jpg",
      name: 'Onion',
      newprice: '$10.00 ',
      oldprice: '$14.00',
      quantity: 1,
      totalPrice: '$10.00 ',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      secondaryimg: [],
      dress: '',
    },
    {
      id: 4,
      mainimg: "../../../assets/images/vegetable/veg6.jpg",
      name: 'Brinjal',
      newprice: '$19.00 ',
      oldprice: '$30.00',
      quantity: 1,
      totalPrice: '$19.00 ',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      secondaryimg: [],
      dress: '',
    },


  ]


  // blogs Section 
  vegblog: any = [
    {
      id: 0,
      img: 'assets/images/vegetable/veg8.jpg',
      date: '25 January 2018',
    },
    {
      id: 1,
      img: 'assets/images/vegetable/veg9.jpg',
      date: '26 January 2018',
    },
    {
      id: 2,
      img: 'assets/images/vegetable/veg10.jpg',
      date: '27 January 2018',
    },

  ]

  //add to cart function
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
