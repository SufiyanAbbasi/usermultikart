import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faShoppingCart, faMagnifyingGlass, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { LogosComponent } from "../../shared/logos/logos.component";

@Component({
    selector: 'app-marijuana',
    standalone: true,
    templateUrl: './marijuana.component.html',
    styleUrl: './marijuana.component.css',
    imports: [CommonModule, RouterLink, FontAwesomeModule, LogosComponent]
})
export class MarijuanaComponent {

  star = faStar
  cart = faShoppingCart
  search = faMagnifyingGlass
  heart = faHeart
  compare = faCodeCompare
  popularprod: any = [
    {
        id: 1,
        mainimg: "../../../assets/images/marijuana/mj5.jpg",
        name: 'Goat Head',
        newprice: '$114.00 ',
        // oldprice: '$120.00'
    },
    {
        id: 2,
        mainimg: "../../../assets/images/marijuana/mj6.jpg",
        name: 'Fruit Tarts',
        newprice: '$154.00 ',
        // oldprice: '$140.00'
    },
    {
        id: 3,
        mainimg: "../../../assets/images/marijuana/mj8.jpg",
        name: 'Tuncture',
        newprice: '$94.40 ',
        // oldprice: '$136.00'
    },
    {
        id: 4,
        mainimg: "../../../assets/images/marijuana/mj8.jpg",
        name: 'Moon Walk',
        newprice: '$234.00 ',
        // oldprice: '$149.00'
    },


]

marijuabnablog: any = [
  {
    id:0,
    img: 'assets/images/marijuana/mj11.jpg',
    date: '25 January 2018',
  },
  {
    id:1,
    img: 'assets/images/marijuana/mj10.jpg',
    date: '26 January 2018',
  },
  {
    id:2,
    img: 'assets/images/marijuana/mj12.jpg',
    date: '27 January 2018',
  },

]

}
