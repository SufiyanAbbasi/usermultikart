import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
 // Sublists hide and show 
 id: any
 mylist: any = {
   num: [
     {
       id: 0,
       title: "BAGS",
       sublist: ['Shopper Bags', 'Laptop Bags', 'Clutches', 'Purses'],
       isSublistVisible: false
     },
     {
       id: 1,
       title: "FOOTWEAR",
       sublist: ['Sport Shoes', 'Formal Shoes', 'Casual Shoes'],
       isSublistVisible: false
     },
     {
       id: 2,
       title: "WATCHES",
       sublist: [''],
       isSublistVisible: false
     },
     {
       id: 3,
       title: "ACCESSORIES",
       sublist: ['Fashion', 'Caps', 'Hats', 'Bangles'],
       isSublistVisible: false
     },
     {
       id: 4,
       title: "HOUSE OF DESIGN",
       sublist: [''],
       isSublistVisible: false
     },
     {
       id: 5,
       title: "BEAUTY AND PERSONAL CARE",
       sublist: ['Makeup', 'Skincare', 'Beauty'],
       isSublistVisible: false
     },
     {
       id: 6,
       title: "HOME AND DECOR",
       sublist: [''],
       isSublistVisible: false
     },
     {
       id: 7,
       title: "KITCHEN",
       sublist: [''],
       isSublistVisible: false
     },

   ]
 };
 toggleSublistVisibility(index: number): void {
   this.mylist.num[index].isSublistVisible = !this.mylist.num[index].isSublistVisible;
 }


 // Sublists 
}
