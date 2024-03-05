import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faShoppingCart, faMagnifyingGlass, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { Topcollection } from '../../core/interfaces/topcollection';
import { addcart } from '../../core/services/addcart.service';
import { CompareService } from '../../core/services/compare.service';


@Component({
  selector: 'app-bags',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule, CommonModule],
  templateUrl: './bags.component.html',
  styleUrl: './bags.component.css'
})
export class BagsComponent {
  star = faStar
  cart = faShoppingCart
  search = faMagnifyingGlass
  heart = faHeart
  compare = faCodeCompare
  showContent: boolean = true;

  showContent3: boolean = true;
  toggleContent() {
    this.showContent = !this.showContent;
  }
  toggleContent3() {
    this.showContent3 = !this.showContent3;
  }

  product!: Topcollection[];
  item!: Topcollection;
  constructor(private cartService: addcart, private compareService: CompareService) { }
  ngOnInit(): void {

  }

  trendingbags: Topcollection[] = [
    {
      id: 1,
      mainimg: "../../../assets/images/bags/bag3.jpg",
      name: 'Bag 1',
      newprice: '$231.00 ',
      oldprice: '$30.00',
      quantity: 1,
      totalPrice: '$231.00 ',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      secondaryimg: [],
      dress: '',
    },
    {
      id: 2,
      mainimg: "../../../assets/images/bags/bag4.jpg",
      name: 'Bag 2',
      newprice: '$181.00 ',
      oldprice: '$30.00',
      quantity: 1,
      totalPrice: '$181.00 ',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      secondaryimg: [],
      dress: '',
    },
    {
      id: 3,
      mainimg: "../../../assets/images/bags/bag5.jpg",
      name: 'Bag 3',
      newprice: '$210.00 ',
      oldprice: '$30.00',
      quantity: 1,
      totalPrice: '$210.00 ',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      secondaryimg: [],
      dress: '',
    },
    {
      id: 4,
      mainimg: "../../../assets/images/bags/bag6.jpg",
      name: 'Bag 4',
      newprice: '$190.00 ',
      oldprice: '$30.00',
      quantity: 1,
      totalPrice: '$190.00 ',
      description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
      secondaryimg: [],
      dress: '',
    },


  ]

  bagblog: any = [
    {
      id: 0,
      img: 'assets/images/bags/bag11.jpg',
      date: '25 January 2018',
    },
    {
      id: 1,
      img: 'assets/images/bags/bag10.jpg',
      date: '26 January 2018',
    },
    {
      id: 2,
      img: 'assets/images/bags/bag11.jpg',
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
