import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faShoppingCart, faMagnifyingGlass, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { addcart } from '../../../core/services/addcart.service';
import { CompareService } from '../../../core/services/compare.service';

@Component({
  selector: 'app-bestsellers',
  standalone: true,
  imports: [RouterLink, CommonModule, FontAwesomeModule],
  templateUrl: './bestsellers.component.html',
  styleUrl: './bestsellers.component.css'
})
export class BestsellersComponent {
  star = faStar
  cart = faShoppingCart
  search = faMagnifyingGlass
  heart = faHeart
  compare = faCodeCompare

  product!: any[];
  constructor(private cartService: addcart, private compareService: CompareService) { }
  ngOnInit(): void {

  }


  list: any = [
    {
      id: 1,
      mainimg: "../../../assets/images/tc4.jpg",
      dress: 'Belted Dress',
      newprice: '$111.00 ',
      oldprice: '$185.00',
      totalPrice: '$111.00',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      quantity: 1,
    },
    {
      id: 2,
      mainimg: "../../../assets/images/tc16.jpg",
      dress: 'Crop Top',
      newprice: '$72.00 ',
      oldprice: '$121.00',
      totalPrice: '$72.00',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      quantity: 1,
    },
    {
      id: 3,
      mainimg: "../../../assets/images/tc17.jpg",
      dress: 'Sleeveless Dress',
      newprice: '$261.50 ',
      oldprice: '$290.00',
      totalPrice: '$261.00',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      quantity: 1,
    },
    {
      id: 4,
      mainimg: "../../../assets/images/tc18.jpg",
      dress: 'Boho Dress',
      newprice: '$77.00 ',
      oldprice: '$129.00',
      totalPrice: '$77.00',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      quantity: 1,
    },
    {
      id: 5,
      mainimg: "../../../assets/images/tc19.jpg",
      dress: 'Jumpsuit',
      newprice: '$225.00 ',
      oldprice: '$375.00',
      totalPrice: '$225.00',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      quantity: 1,
    },
    {
      id: 6,
      mainimg: "../../../assets/images/tc5.jpg",
      dress: 'skater Dress',
      newprice: '$161.00 ',
      oldprice: '$230.00',
      totalPrice: '$161.00',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      quantity: 1,
    },
    {
      id: 7,
      mainimg: "../../../assets/images/tc2.jpg",
      dress: ' Bodycon Dress',
      newprice: '$153.00 ',
      oldprice: '$180.00',
      totalPrice: '$153.00',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      quantity: 1,
    },
    {
      id: 8,
      mainimg: "../../../assets/images/tc20.jpg",
      dress: 'Offshoulder Dress',
      newprice: '$144.00 ',
      oldprice: '$240.00',
      totalPrice: '$144.00',
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
