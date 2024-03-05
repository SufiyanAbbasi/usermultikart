import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faShoppingCart, faMagnifyingGlass, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { LogosComponent } from "../../shared/logos/logos.component";
import { Topcollection } from '../../core/interfaces/topcollection';
import { addcart } from '../../core/services/addcart.service';
import { CompareService } from '../../core/services/compare.service';

@Component({
  selector: 'app-marijuana',
  standalone: true,
  templateUrl: './marijuana.component.html',
  styleUrl: './marijuana.component.css',
  imports: [CommonModule, RouterLink, FontAwesomeModule, LogosComponent]
})
export class MarijuanaComponent {

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
  popularprod: Topcollection[] = [
    {
      id: 1,
      mainimg: "../../../assets/images/marijuana/mj5.jpg",
      name: 'Goat Head',
      newprice: '$114.00 ',
      oldprice: '$120.00',
      quantity: 1,
      totalPrice: '$114.00 ',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      secondaryimg: [],
      dress: '',
    },
    {
      id: 2,
      mainimg: "../../../assets/images/marijuana/mj6.jpg",
      name: 'Fruit Tarts',
      newprice: '$154.00 ',
      oldprice: '$140.00',
      quantity: 1,
      totalPrice: '$154.00 ',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      secondaryimg: [],
      dress: '',
    },
    {
      id: 3,
      mainimg: "../../../assets/images/marijuana/mj8.jpg",
      name: 'Tuncture',
      newprice: '$94.40 ',
      oldprice: '$136.00',
      quantity: 1,
      totalPrice: '$94.00 ',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      secondaryimg: [],
      dress: '',
    },
    {
      id: 4,
      mainimg: "../../../assets/images/marijuana/mj8.jpg",
      name: 'Moon Walk',
      newprice: '$234.00 ',
      oldprice: '$149.00',
      quantity: 1,
      totalPrice: '$234.00 ',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      secondaryimg: [],
      dress: '',
    },


  ]

  marijuabnablog: any = [
    {
      id: 0,
      img: 'assets/images/marijuana/mj11.jpg',
      date: '25 January 2018',
    },
    {
      id: 1,
      img: 'assets/images/marijuana/mj10.jpg',
      date: '26 January 2018',
    },
    {
      id: 2,
      img: 'assets/images/marijuana/mj12.jpg',
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
