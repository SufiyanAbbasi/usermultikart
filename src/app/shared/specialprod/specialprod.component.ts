import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faShoppingCart, faMagnifyingGlass, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { ExproductComponent } from "../subspecialproducts/exproduct/exproduct.component";

@Component({
    selector: 'app-specialprod',
    standalone: true,
    templateUrl: './specialprod.component.html',
    styleUrl: './specialprod.component.css',
    imports: [CommonModule, FontAwesomeModule, RouterLink,  RouterOutlet, RouterLinkActive, ExproductComponent]
})
export class SpecialprodComponent {
  star = faStar
  cart = faShoppingCart
  search = faMagnifyingGlass
  heart = faHeart
  compare = faCodeCompare


  list: any = [
    {id:1,
     mainimg :"../../../assets/images/tc1.jpg",
     secondaryimg : ['../../../assets/images/tc1.jpg', '../../../assets/images/tc2.jpg', '../../../assets/images/tc3.jpg'],
     dress : 'Trim Dress',
     newprice : '$87.00 ',
     oldprice: '$145.00'
    },
    {id:2,
     mainimg :"../../../assets/images/tc4.jpg",
     secondaryimg : ['../../../assets/images/tc4.jpg', '../../../assets/images/tc5.jpg', '../../../assets/images/tc6.jpg','../../../assets/images/tc7.jpg'],
     dress : 'Belted Dress',
     newprice : '$111.00 ',
     oldprice: '$185.00'
    },
    {id:3,
     mainimg :"../../../assets/images/tc8.jpg",
     secondaryimg : ['../../../assets/images/tc8.jpg', '../../../assets/images/tc9.jpg'],
     dress : 'Fitted Dress',
     newprice : '$104.00 ',
     oldprice: '$174.00'
    },
    {id:4,
     mainimg :"../../../assets/images/tc10.jpg",
     secondaryimg : ['../../../assets/images/tc10.jpg', '../../../assets/images/tc11.jpg'],
     dress : 'Belted Top',
     newprice : '$49.00 ',
     oldprice: '$98.00'
    },
  
   
   ]
  
}
