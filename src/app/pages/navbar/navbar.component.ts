import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faArrowAltCircleLeft, faSearch, faGear, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { SubnavComponent } from "../../shared/subnav/subnav.component";
@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [FontAwesomeModule, CommonModule, SidebarComponent, SubnavComponent]
})

export class NavbarComponent {
  bar = faBars;
  arrow = faArrowAltCircleLeft;
  search = faSearch;
  gear = faGear;
  cart = faCartShopping;


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




}