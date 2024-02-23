import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faShoppingCart, faMagnifyingGlass, faHeart, faCodeCompare, } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-onsalefurniture',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule, CommonModule],
  templateUrl: './onsalefurniture.component.html',
  styleUrl: './onsalefurniture.component.css'
})
export class OnsalefurnitureComponent {
  star = faStar
  cart = faShoppingCart
  search = faMagnifyingGlass
  heart = faHeart
  compare = faCodeCompare

  onsalefurniture: any = [
    {id:1,
     mainimg :"../../../assets/images/furniture/fur6.jpg",
     dress : 'Arm Chair',
     newprice : '$49.00 ',
     oldprice: '$98.00'
    },
    {id:2,
     mainimg :"../../../assets/images/furniture/fur7.jpg",
     dress : 'Oak Finish Chair',
     newprice : '$77.00 ',
     oldprice: '$129.00'
    },
    {id:3,
     mainimg :"../../../assets/images/furniture/fur8.jpg",
     dress : 'Wooden Chair',
     newprice : '$234.50 ',
     oldprice: '$260.00'
    },
    {id:4,
     mainimg :"../../../assets/images/furniture/fur9.jpg",
     dress : 'Metal Table Lamp',
     newprice : '$198.00 ',
     oldprice: '$330.00'
    },
    {id:5,
     mainimg :"../../../assets/images/furniture/fur10.jpg",
     dress : 'Wood End Table',
     newprice : '$287.00 ',
     oldprice: '$410.00'
    },
    {id:6,
     mainimg :"../../../assets/images/furniture/fur11.jpg",
     dress : 'Longue Chair',
     newprice : '$45.00 ',
     oldprice: '$75.00'
    },
    {id:7,
     mainimg :"../../../assets/images/furniture/fur12.jpg",
     dress : 'Rocking Chair',
     newprice : '$93.00 ',
     oldprice: '$155.00'
    },
    {id:8,
     mainimg :"../../../assets/images/furniture/fur13.jpg",
     dress : 'Barrel',
     newprice : '$196.00 ',
     oldprice: '$289.00'
    },
  
   
   ]

}
