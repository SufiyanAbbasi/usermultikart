import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faShoppingCart, faMagnifyingGlass, faHeart, faCodeCompare, } from '@fortawesome/free-solid-svg-icons';
import { addcart } from '../../../core/services/addcart.service';
import { CompareService } from '../../../core/services/compare.service';


@Component({
  selector: 'app-onsale',
  standalone: true,
  imports: [RouterLink, CommonModule, FontAwesomeModule],
  templateUrl: './onsale.component.html',
  styleUrl: './onsale.component.css'
})
export class OnsaleComponent {
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
      mainimg: "../../../assets/images/tc10.jpg",
      dress: 'Belted Top',
      newprice: '$49.00 ',
      oldprice: '$98.00',
      totalPrice: '$49.00',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      quantity: 1,
    },
    {
      id: 2,
      mainimg: "../../../assets/images/tc18.jpg",
      dress: 'Boho Tops',
      newprice: '$77.00 ',
      oldprice: '$129.00',
      totalPrice: '$77.00',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      quantity: 1,
    },
    {
      id: 3,
      mainimg: "../../../assets/images/tc27.jpg",
      dress: 'Knee Length Dress',
      newprice: '$234.50 ',
      oldprice: '$260.00',
      totalPrice: '$234.00',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      quantity: 1,
    },
    {
      id: 4,
      mainimg: "../../../assets/images/tc28.jpg",
      dress: 'Flutter Dress',
      newprice: '$198.00 ',
      oldprice: '$330.00',
      totalPrice: '$198.00',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      quantity: 1,
    },
    {
      id: 5,
      mainimg: "../../../assets/images/tc11.jpg",
      dress: 'Choker Neck Dress',
      newprice: '$287.00 ',
      oldprice: '$410.00',
      totalPrice: '$287.00',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      quantity: 1,
    },
    {
      id: 6,
      mainimg: "../../../assets/images/tc29.jpg",
      dress: 'Layered Dress',
      newprice: '$45.00 ',
      oldprice: '$75.00',
      totalPrice: '$45.00',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      quantity: 1,
    },
    {
      id: 7,
      mainimg: "../../../assets/images/tc30.jpg",
      dress: 'Choker Neck Top',
      newprice: '$93.00 ',
      oldprice: '$155.00',
      totalPrice: '$93.00',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      quantity: 1,
    },
    {
      id: 8,
      mainimg: "../../../assets/images/tc31.jpg",
      dress: 'Rolled Sleeve Top',
      newprice: '$196.00 ',
      oldprice: '$289.00',
      totalPrice: '$196.00',
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


