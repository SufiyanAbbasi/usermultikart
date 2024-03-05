import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faShoppingCart, faMagnifyingGlass, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { DeliveryComponent } from "../../shared/delivery/delivery.component";
import { Topcollection } from '../../core/interfaces/topcollection';
import { addcart } from '../../core/services/addcart.service';
import { CompareService } from '../../core/services/compare.service';

@Component({
  selector: 'app-flower',
  standalone: true,
  templateUrl: './flower.component.html',
  styleUrl: './flower.component.css',
  imports: [RouterLink, FontAwesomeModule, DeliveryComponent]
})
export class FlowerComponent {
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

  trendingitemflower: any = [
    {
      id: 1,
      mainimg: "../../../assets/images/flower/flower10.jpg",
      name: 'Dreamy Love',
      newprice: '$159.00 ',
      oldprice: '$190.00',
      quantity: 1,
      totalPrice: '$159.00 ',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      secondaryimg: [],
      dress: '',
    },
    {
      id: 2,
      mainimg: "../../../assets/images/flower/flower11.jpg",
      name: 'Perky Bloom',
      newprice: '$45.00 ',
      oldprice: '$90.00',
      quantity: 1,
      totalPrice: '$45.00 ',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      secondaryimg: [],
      dress: '',
    },
    {
      id: 3,
      mainimg: "../../../assets/images/flower/flower12.jpg",
      name: 'Divine Love',
      newprice: '$52.00 ',
      oldprice: '$65.00',
      quantity: 1,
      totalPrice: '$52.00 ',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      secondaryimg: [],
      dress: '',
    },
    {
      id: 4,
      mainimg: "../../../assets/images/flower/flower13.jpg",
      name: 'Charismatic Elanor',
      newprice: '$42.00 ',
      oldprice: '$45.00',
      quantity: 1,
      totalPrice: '$42.00 ',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      secondaryimg: [],
      dress: '',
    },


  ]

  flowerblog: any = [
    {
      id: 0,
      img: 'assets/images/flower/flower15.jpg',
      date: '25 January 2018',
    },
    {
      id: 1,
      img: 'assets/images/flower/flower16.jpg',
      date: '26 January 2018',
    },
    {
      id: 2,
      img: 'assets/images/flower/flower17.jpg',
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
