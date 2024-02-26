import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faShoppingCart, faMagnifyingGlass, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-beauty',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, CommonModule],
  templateUrl: './beauty.component.html',
  styleUrl: './beauty.component.css'
})
export class BeautyComponent {
  star = faStar
  cart = faShoppingCart
  search = faMagnifyingGlass
  heart = faHeart
  compare = faCodeCompare



  beautynewprod: any = [
    {
      id: 1,
      mainimg: "../../../assets/images/beauty/be4.jpg",
      name: 'Foundation',
      newprice: '$202.00 ',
      oldprice: '$225.00'
    },
    {
      id: 2,
      mainimg: "../../../assets/images/beauty/be5.jpg",
      name: 'Bronzer',
      newprice: '$135.00 ',
      oldprice: '$150.00'
    },
    {
      id: 3,
      mainimg: "../../../assets/images/beauty/be6.jpg",
      name: 'Face Primer',
      newprice: '$280.00 ',
      oldprice: '$312.00'
    },
    {
      id: 4,
      mainimg: "../../../assets/images/beauty/be7.jpg",
      name: 'Concealer',
      newprice: '$104.00 ',
      oldprice: '$130.00'
    },


  ]

  beautyblog: any = [
    {
      id:0,
      img: 'assets/images/beauty/be9.jpg',
      date: '25 January 2018',
    },
    {
      id:1,
      img: 'assets/images/beauty/be10.jpg',
      date: '26 January 2018',
    },
    {
      id:2,
      img: 'assets/images/beauty/be11.jpg',
      date: '27 January 2018',
    },

  ]

}
