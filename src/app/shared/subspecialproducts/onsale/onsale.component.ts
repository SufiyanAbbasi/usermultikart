import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faShoppingCart, faMagnifyingGlass, faHeart, faCodeCompare, } from '@fortawesome/free-solid-svg-icons';


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

  list: any = [
    {id:1,
     mainimg :"../../../assets/images/tc10.jpg",
     dress : 'Belted Top',
     newprice : '$49.00 ',
     oldprice: '$98.00'
    },
    {id:2,
     mainimg :"../../../assets/images/tc18.jpg",
     dress : 'Boho Tops',
     newprice : '$77.00 ',
     oldprice: '$129.00'
    },
    {id:3,
     mainimg :"../../../assets/images/tc27.jpg",
     dress : 'Knee Length Dress',
     newprice : '$234.50 ',
     oldprice: '$260.00'
    },
    {id:4,
     mainimg :"../../../assets/images/tc28.jpg",
     dress : 'Flutter Dress',
     newprice : '$198.00 ',
     oldprice: '$330.00'
    },
    {id:5,
     mainimg :"../../../assets/images/tc11.jpg",
     dress : 'Choker Neck Dress',
     newprice : '$287.00 ',
     oldprice: '$410.00'
    },
    {id:6,
     mainimg :"../../../assets/images/tc29.jpg",
     dress : 'Layered Dress',
     newprice : '$45.00 ',
     oldprice: '$75.00'
    },
    {id:7,
     mainimg :"../../../assets/images/tc30.jpg",
     dress : 'Choker Neck Top',
     newprice : '$93.00 ',
     oldprice: '$155.00'
    },
    {id:8,
     mainimg :"../../../assets/images/tc31.jpg",
     dress : 'Rolled Sleeve Top',
     newprice : '$196.00 ',
     oldprice: '$289.00'
    },
  
   
   ]
}


