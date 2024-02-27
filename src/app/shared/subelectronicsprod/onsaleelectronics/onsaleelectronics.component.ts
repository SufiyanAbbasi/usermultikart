import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faShoppingCart, faMagnifyingGlass, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-onsaleelectronics',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, CommonModule],
  templateUrl: './onsaleelectronics.component.html',
  styleUrl: './onsaleelectronics.component.css'
})
export class OnsaleelectronicsComponent {
  star = faStar
  cart = faShoppingCart
  search = faMagnifyingGlass
  heart = faHeart
  compare = faCodeCompare


 
  onsaleelectronics: any = [
    {
      id: 1,
      mainimg: "../../../assets/images/electronics/el9.jpg",
      name: 'Electronics 1',
      newprice: '$49.00 ',
      oldprice: '$98.00'
    },
    {
      id: 2,
      mainimg: "../../../assets/images/electronics/el10.jpg",
      name: 'Electronics 2',
      newprice: '$93.00 ',
      oldprice: '$155.00'
    },
   
    {
      id: 3,
      mainimg: "../../../assets/images/electronics/el7.jpg",
      name: 'Electronics 3',
      newprice: '$45.00 ',
      oldprice: '$75.00'
    },
    
   
    {
      id: 4,
      mainimg: "../../../assets/images/electronics/el8.jpg",
      name: 'Electronics 4',
      newprice: '$287.00 ',
      oldprice: '$410.00'
    },
    {
      id: 5,
      mainimg: "../../../assets/images/electronics/el11.jpg",
      name: 'Electronics 5',
      newprice: '$196.00 ',
      oldprice: '$289.00'
    },
    {
      id: 6,
      mainimg: "../../../assets/images/electronics/el12.jpg",
      name: 'Electronics 6',
      newprice: '$198.00 ',
      oldprice: '$330.00'
    },

  
    {
      id: 7,
      mainimg: "../../../assets/images/electronics/el13.jpg",
      name: 'Electronics 7',
      newprice: '$77.00 ',
      oldprice: '$129.00'
    },
    {
      id: 8,
      mainimg: "../../../assets/images/electronics/el14.jpg",
      name: 'Electronics 8',
      newprice: '$234.50 ',
      oldprice: '$260.00'
    },
  

  ]

}