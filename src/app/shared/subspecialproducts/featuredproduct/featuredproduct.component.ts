import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faShoppingCart, faMagnifyingGlass, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';

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


  list: any = [
    {id:1,
     mainimg :"../../../assets/images/tc8.jpg",
     dress : 'Fitted Dress',
     newprice : '$104.00 ',
     oldprice: '$174.00'
    },
    {id:2,
     mainimg :"../../../assets/images/tc21.jpg",
     dress : 'Waist Dress',
     newprice : '$184.00 ',
     oldprice: '$230.00'
    },
    {id:3,
     mainimg :"../../../assets/images/tc7.jpg",
     dress : 'Wrap Dress',
     newprice : '$69.50 ',
     oldprice: '$115.00'
    },
    {id:4,
     mainimg :"../../../assets/images/tc22.jpg",
     dress : 'Floral Dress',
     newprice : '$157.00 ',
     oldprice: '$175.00'
    },
    {id:5,
     mainimg :"../../../assets/images/tc23.jpg",
     dress : 'Mini Dress',
     newprice : '$199.00 ',
     oldprice: '$285.00'
    },
    {id:6,
     mainimg :"../../../assets/images/tc24.jpg",
     dress : 'Pink Tunik Dress',
     newprice : '$119.00 ',
     oldprice: '$199.00'
    },
    {id:7,
     mainimg :"../../../assets/images/tc25.jpg",
     dress : 'Skater Top',
     newprice : '$84.00 ',
     oldprice: '$140.00'
    },
    {id:8,
     mainimg :"../../../assets/images/tc26.jpg",
     dress : 'Black Short Dress',
     newprice : '$96.00 ',
     oldprice: '$160.00'
    },
  
   
   ]


}
