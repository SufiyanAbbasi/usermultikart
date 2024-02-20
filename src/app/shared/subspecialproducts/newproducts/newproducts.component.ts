import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faShoppingCart, faMagnifyingGlass, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-newproducts',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterLink],
  templateUrl: './newproducts.component.html',
  styleUrl: './newproducts.component.css'
})

export class NewproductsComponent {
  star = faStar
  cart = faShoppingCart
  search = faMagnifyingGlass
  heart = faHeart
  compare = faCodeCompare


  list: any = [
    {id:1,
     mainimg :"../../../assets/images/tc2.jpg",
     dress : 'Trim Dress',
     newprice : '$87.00 ',
     oldprice: '$145.00'
    },
    {id:2,
     mainimg :"../../../assets/images/tc10.jpg",
     dress : 'Belted Top',
     newprice : '$49.00 ',
     oldprice: '$98.00'
    },
    {id:3,
     mainimg :"../../../assets/images/tc12.jpg",
     dress : 'V-neck Dress',
     newprice : '$94.50 ',
     oldprice: '$315.00'
    },
    {id:4,
     mainimg :"../../../assets/images/tc6.jpg",
     dress : 'Maxi Dress',
     newprice : '$159.00 ',
     oldprice: '$266.00'
    },
    {id:5,
     mainimg :"../../../assets/images/tc13.jpg",
     dress : 'Fit Flare Dress',
     newprice : '$133.00 ',
     oldprice: '$148.00'
    },
    {id:6,
     mainimg :"../../../assets/images/tc1.jpg",
     dress : 'Midi Dress',
     newprice : '$240.00 ',
     oldprice: '$400.00'
    },
    {id:7,
     mainimg :"../../../assets/images/tc14.jpg",
     dress : ' Tulip  Dress',
     newprice : '$130.00 ',
     oldprice: '$145.00'
    },
    {id:8,
     mainimg :"../../../assets/images/tc15.jpg",
     dress : 'Skater Dress',
     newprice : '$126.00 ',
     oldprice: '$210.00'
    },
  
   
   ]

}
