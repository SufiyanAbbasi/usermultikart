import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faShoppingCart, faMagnifyingGlass, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { DeliveryComponent } from "../../shared/delivery/delivery.component";
import { LogosComponent } from "../../shared/logos/logos.component";

@Component({
    selector: 'app-shoes',
    standalone: true,
    templateUrl: './shoes.component.html',
    styleUrl: './shoes.component.css',
    imports: [FontAwesomeModule, RouterLink, CommonModule, DeliveryComponent, LogosComponent]
})
export class ShoesComponent {
  star = faStar
  cart = faShoppingCart
  search = faMagnifyingGlass
  heart = faHeart
  compare = faCodeCompare

  showContent: boolean = true;
  showContent1: boolean = true;
  showContent2: boolean = true;
  showContent3: boolean = true;
  toggleContent(){
      this.showContent = !this.showContent; 
  }
  toggleContent1(){
      this.showContent1 = !this.showContent1; 
  }
  toggleContent2(){
      this.showContent2 = !this.showContent2; 
  }
  toggleContent3(){
      this.showContent3 = !this.showContent3; 
  }
  showSecondary: boolean = false;
  shoesprod: any = [
    {
      id: 1,
      mainimg: "../../../assets/images/shoes/s15.jpg",
      secondaryimg: "../../../assets/images/shoes/s11.jpg",
      name: 'Shoes 1',
      newprice: '$60.00 ',
      oldprice: '$150.00',
      showSecondary: false
    },
    {
      id: 2,
      mainimg: "../../../assets/images/shoes/s16.jpg",
      secondaryimg: "../../../assets/images/shoes/s12.jpg",
      name: 'Shoes 2',
      newprice: '$179.00 ',
      oldprice: '$229.00',
      showSecondary: false
    },
    {
      id: 3,
      mainimg: "../../../assets/images/shoes/s17.jpg",
      secondaryimg: "../../../assets/images/shoes/s13.jpg",
      name: 'Shoes 3',
      newprice: '$234.00 ',
      oldprice: '$260.00',
      showSecondary: false
    },
    {
      id: 4,
      mainimg: "../../../assets/images/shoes/s18.jpg",
      secondaryimg: "../../../assets/images/shoes/s14.jpg",
      name: 'Shoes 4',
      newprice: '$360.00 ',
      oldprice: '$450.00',
      showSecondary: false
    },


  ]

  shoesblog: any = [
    {
      id:0,
      img: 'assets/images/shoes/s25.jpg',
      date: '25 January 2018',
    },
    {
      id:1,
      img: 'assets/images/shoes/s26.jpg',
      date: '26 January 2018',
    },
    {
      id:2,
      img: 'assets/images/shoes/s27.jpg',
      date: '27 January 2018',
    },

  ]
}
