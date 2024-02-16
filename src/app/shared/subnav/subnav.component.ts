import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-subnav',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './subnav.component.html',
  styleUrl: './subnav.component.css'
})
export class SubnavComponent {
  downangle = faAngleDown;
  arrow = faArrowAltCircleLeft;

  //  The other section of navbar home, shop, products, features, pages and blogs 
  // here i make list 


  navlist: any = {
    navnum: [
      {
        id: 0,
        navtitle: "HOME",
        subnav: ['Clothing', 'Vegetable', 'Watch', 'Furniture', 'Flower', 'Beauty', 'Electronics', 'Pets', 'Gym', 'Tool', 'Shoes', 'Bags', 'Marijuana'],
        isSublistVisible: false,
      },
      {
        id: 1,
        navtitle: "SHOP",
        subnav: ['Left Sidebar', 'Right Sidebar', 'No Sidebar', 'Infinite Scroll'],
        isSublistVisible: false,
      },
      {
        id: 2,
        navtitle: "PRODUCTS",
        subnav: ['Sidebar', 'Three Olumn', 'Four Image', 'Bundle Product', 'Image Outside'],
        isSublistVisible: false,
      },
      {
        id: 3,
        navtitle: "PAGES",
        subnav: ['Account', 'About Us', 'Search', 'Typography', 'Review', 'Order Success', 'Compare', 'Collection', 'LookBook', '404', 'Coming Soon'],
        isSublistVisible: false,
      },
      {
        id: 4,
        navtitle: "BLOGS",
        subnav: ['Left Sidebar', 'Right Sidebar', 'No Sidebar', 'Blog Details'],
        isSublistVisible: false,
      },
    ]
  }
  isSublistVisible: boolean = false;

  showSublist() {
    this.isSublistVisible = true;
  }

  hideSublist() {
    this.isSublistVisible = false;
  }

  // here is the features option  
  // At the top of your component file, define the isChatBoxOpen property
  isChatBoxOpen: boolean = false;

  // Function to open the chatbox when hovering over the specified element
  openChatBox() {
    this.isChatBoxOpen = true;
  }

  // Function to close the chatbox when leaving the specified element
  closeChatBox() {
    this.isChatBoxOpen = false;
  }

  //Responsive Navbar
  isNavbarVisible = false;
  toggleNavbar() {
    this.isNavbarVisible = !this.isNavbarVisible;
  }
  // Right Sidebar 
  isSidebarOpen: boolean = false;

  toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleSublist(navbox: any) {
      navbox.isSublistVisible = !navbox.isSublistVisible;
  }
}
