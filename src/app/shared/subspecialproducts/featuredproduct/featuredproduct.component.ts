import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faShoppingCart, faMagnifyingGlass, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { addcart } from '../../../core/services/addcart.service';
import { CompareService } from '../../../core/services/compare.service';

@Component({
  selector: 'app-featuredproduct',
  standalone: true,
  imports: [RouterLink, CommonModule, FontAwesomeModule],
  templateUrl: './featuredproduct.component.html',
  styleUrl: './featuredproduct.component.css'
})
export class FeaturedproductComponent {
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
    {id:1,
     mainimg :"../../../assets/images/tc8.jpg",
     dress : 'Fitted Dress',
     newprice : '$104.00 ',
     oldprice: '$174.00',
     totalPrice: '$104.00',
     description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
     quantity: 1,
    },
    {id:2,
     mainimg :"../../../assets/images/tc21.jpg",
     dress : 'Waist Dress',
     newprice : '$184.00 ',
     oldprice: '$230.00',
     totalPrice: '$184.00',
     description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
     quantity: 1,
    },
    {id:3,
     mainimg :"../../../assets/images/tc7.jpg",
     dress : 'Wrap Dress',
     newprice : '$69.50 ',
     oldprice: '$115.00',
     totalPrice: '$69.00',
     description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
     quantity: 1,
    },
    {id:4,
     mainimg :"../../../assets/images/tc22.jpg",
     dress : 'Floral Dress',
     newprice : '$157.00 ',
     oldprice: '$175.00',
     totalPrice: '$157.00',
     description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
     quantity: 1,
    },
    {id:5,
     mainimg :"../../../assets/images/tc23.jpg",
     dress : 'Mini Dress',
     newprice : '$199.00 ',
     oldprice: '$285.00',
     totalPrice: '$199.00',
     description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
     quantity: 1,
    },
    {id:6,
     mainimg :"../../../assets/images/tc24.jpg",
     dress : 'Pink Tunik Dress',
     newprice : '$119.00 ',
     oldprice: '$199.00',
     totalPrice: '$119.00',
     description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
     quantity: 1,
    },
    {id:7,
     mainimg :"../../../assets/images/tc25.jpg",
     dress : 'Skater Top',
     newprice : '$84.00 ',
     oldprice: '$140.00',
     totalPrice: '$84.00',
     description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
     quantity: 1,
    },
    {id:8,
     mainimg :"../../../assets/images/tc26.jpg",
     dress : 'Black Short Dress',
     newprice : '$96.00 ',
     oldprice: '$160.00',
     totalPrice: '$96.00',
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
