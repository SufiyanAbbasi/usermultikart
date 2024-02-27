import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faShoppingCart, faMagnifyingGlass, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shoes',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, CommonModule],
  templateUrl: './shoes.component.html',
  styleUrl: './shoes.component.css'
})
export class ShoesComponent {
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


}
