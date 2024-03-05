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
    selector: 'app-gym',
    standalone: true,
    templateUrl: './gym.component.html',
    styleUrl: './gym.component.css',
    imports: [FontAwesomeModule, RouterLink, CommonModule, LogosComponent]
})
export class GymComponent {
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


 
  gym: Topcollection[] = [
    {
      id: 1,
      mainimg: "../../../assets/images/gym/gym5.jpg",
      dress: 'Whey Protein',
      newprice: '$135.00 ',
      oldprice: '$150.00',
      quantity: 1,
      totalPrice: '$135.00 ',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      secondaryimg: [],
      name: '',

    },
    {
      id: 2,
      mainimg: "../../../assets/images/gym/gym6.jpg",
      dress: 'Micellar Casein',
      newprice: '$154.00 ',
      oldprice: '$220.00',
      quantity: 1,
      totalPrice: '$154.00 ',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      secondaryimg: [],
      name: '',
    },
    {
      id: 3,
      mainimg: "../../../assets/images/gym/gym7.jpg",
      dress: 'Impact Isolate',
      newprice: '$94.00 ',
      oldprice: '$98.00',
      quantity: 1,
      totalPrice: '$94.00 ',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      secondaryimg: [],
      name: '',
    },
    
    {
      id: 4,
      mainimg: "../../../assets/images/gym/gym8.jpg",
      dress: 'Diet Whey',
      newprice: '$234.00 ',
      oldprice: '$255.00',
      quantity: 1,
      totalPrice: '$234.00 ',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      secondaryimg: [],
      name: '',
    },
    {
      id: 5,
      mainimg: "../../../assets/images/gym/gym9.jpg",
      dress: 'Peanut Butter',
      newprice: '$167.00 ',
      oldprice: '$195.00',
      quantity: 1,
      totalPrice: '$167.00 ',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      secondaryimg: [],
      name: '',
    },
    {
      id: 6,
      mainimg: "../../../assets/images/gym/gym10.jpg",
      dress: 'Impact Diet Whey',
      newprice: '$87.00 ',
      oldprice: '$90.00',
      quantity: 1,
      totalPrice: '$87.00 ',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      secondaryimg: [],
      name: '',
    },

  
    {
      id: 7,
      mainimg: "../../../assets/images/gym/gym11.jpg",
      dress: 'Muscleblaze Gainer',
      newprice: '$152.00 ',
      oldprice: '$160.00',
      quantity: 1,
      totalPrice: '$152.00 ',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      secondaryimg: [],
      name: '',
    },
    {
      id: 8,
      mainimg: "../../../assets/images/gym/gym12.jpg",
      dress: 'Protein Powder',
      newprice: '$182.50 ',
      oldprice: '$215.00',
      quantity: 1,
      totalPrice: '$182.00 ',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      secondaryimg: [],
      name: '',
    },
  

  ]


  petblog: any = [
    {
        id: 0,
        img: 'assets/images/gym/gym14.jpg',
        date: '25 January 2018',
    },
    {
        id: 1,
        img: 'assets/images/gym/gym15.jpg',
        date: '26 January 2018',
    },
    {
        id: 2,
        img: 'assets/images/gym/gym16.jpg',
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
