import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faShoppingCart, faMagnifyingGlass, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';


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
  toggleContent(){
      this.showContent = !this.showContent; 
  }
  toggleContent3(){
      this.showContent3 = !this.showContent3; 
  }


  trendingbags: any = [
      {
          id: 1,
          mainimg: "../../../assets/images/bags/bag3.jpg",
          name: 'Bag 1',
          newprice: '$231.00 ',
      },
      {
          id: 2,
          mainimg: "../../../assets/images/bags/bag4.jpg",
          name: 'Bag 2',
          newprice: '$181.00 ',
      },
      {
          id: 3,
          mainimg: "../../../assets/images/bags/bag5.jpg",
          name: 'Bag 3',
          newprice: '$210.00 ',
      },
      {
          id: 4,
          mainimg: "../../../assets/images/bags/bag6.jpg",
          name: 'Bag 4',
          newprice: '$190.00 ',
      },


  ]

  bagblog: any = [
    {
      id:0,
      img: 'assets/images/bags/bag11.jpg',
      date: '25 January 2018',
    },
    {
      id:1,
      img: 'assets/images/bags/bag10.jpg',
      date: '26 January 2018',
    },
    {
      id:2,
      img: 'assets/images/bags/bag11.jpg',
      date: '27 January 2018',
    },

  ]

}
