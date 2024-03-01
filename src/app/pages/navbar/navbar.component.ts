import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faArrowAltCircleLeft, faSearch, faGear, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { SubnavComponent } from "../../shared/subnav/subnav.component";
import { RouterLink } from '@angular/router';
import { addcart } from '../../core/services/addcart.service';
import { Observable } from 'rxjs';
import { Topcollection } from '../../core/interfaces/topcollection';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [FontAwesomeModule, CommonModule, SidebarComponent, SubnavComponent, RouterLink]
})

export class NavbarComponent implements OnInit {
  bar = faBars;
  arrow = faArrowAltCircleLeft;
  search = faSearch;
  gear = faGear;
  cart = faCartShopping;

  //services for item add to cart - open
  cartItemCount$!: Observable<number>;
  cartItems$!: Observable<Topcollection[]>;
  constructor(private cartService: addcart  ) { }

  ngOnInit(): void {
    this.cartItemCount$ = this.cartService.getCartItemCount();
    
    this.cartItems$ = this.cartService.getCartItems();
  }
  //services for item add to cart - ends
 


  // Sidebar Code on fa-icon
  isSidebarOpen = false;
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  //open the chatbox on the Gear icon
  isChatBoxOpen: boolean = false;
  openChatBox() {
    this.isChatBoxOpen = true;
  }
  closeChatBox() {
    this.isChatBoxOpen = false;
  }

  // open the cartbox on the cart icon 
  showCartBox = false;



}