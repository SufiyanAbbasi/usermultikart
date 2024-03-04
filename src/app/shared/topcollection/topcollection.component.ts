import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faShoppingCart, faMagnifyingGlass, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { Topcollection } from '../../core/interfaces/topcollection';
import { addcart } from '../../core/services/addcart.service';
import { CompareService } from '../../core/services/compare.service';

@Component({
  selector: 'app-topcollection',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './topcollection.component.html',
  styleUrl: './topcollection.component.css',
  // providers: [addcart]
})
export class TopcollectionComponent implements OnInit {
  star = faStar
  cart = faShoppingCart
  search = faMagnifyingGlass
  heart = faHeart
  compare = faCodeCompare

  product!: Topcollection[];
  constructor(private cartService: addcart, private compareService: CompareService) { }
  ngOnInit(): void {
    
  }
  list: Topcollection[] = [
    {
      id: 1,
      mainimg: "../../../assets/images/tc1.jpg",
      secondaryimg: ['../../../assets/images/tc1.jpg', '../../../assets/images/tc2.jpg', '../../../assets/images/tc3.jpg'],
      dress: 'Trim Dress',
      newprice: '$87.00 ',
      oldprice: '$145.00', 
      quantity: 1,
      totalPrice: '$87.00 ' ,
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo"
    },
    {
      id: 2,
      mainimg: "../../../assets/images/tc4.jpg",
      secondaryimg: ['../../../assets/images/tc4.jpg', '../../../assets/images/tc5.jpg', '../../../assets/images/tc6.jpg', '../../../assets/images/tc7.jpg'],
      dress: 'Belted Dress',
      newprice: '$111.00 ',
      oldprice: '$185.00',
      quantity: 1,
      totalPrice: '$111.00 ' ,
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo"
    },
    {
      id: 3,
      mainimg: "../../../assets/images/tc8.jpg",
      secondaryimg: ['../../../assets/images/tc8.jpg', '../../../assets/images/tc9.jpg'],
      dress: 'Fitted Dress',
      newprice: '$104.00 ',
      oldprice: '$174.00',
      quantity: 1,
      totalPrice: '$104.00 ' ,
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo"
    },
    {
      id: 4,
      mainimg: "../../../assets/images/tc10.jpg",
      secondaryimg: ['../../../assets/images/tc10.jpg', '../../../assets/images/tc11.jpg'],
      dress: 'Belted Top',
      newprice: '$49.00 ',
      oldprice: '$98.00',
      quantity: 1,
      totalPrice: '$49.00 ' ,
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo"
    },


  ]
  
  addToCart(product: Topcollection) {
    this.cartService.addToCart(product);
  }
 

  swapMainImage(item: any, img: string) {
    item.mainimg = img; // Swap the main image with the hovered secondary image
  }

  // wishlist 
  showAlert(){
   alert("This Item has been added to wishlist")
  }

  // compare function 
  addToCompare(item: Topcollection): void {
    this.compareService.addToCompare(item);
    alert("Click ok! to compare")
  }



}
