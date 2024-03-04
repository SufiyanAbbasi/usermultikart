import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CompareService } from '../../core/services/compare.service';
import { Topcollection } from '../../core/interfaces/topcollection';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { addcart } from '../../core/services/addcart.service';

@Component({
  selector: 'app-compareitems',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './compareitems.component.html',
  styleUrl: './compareitems.component.css'
})
export class CompareitemsComponent implements OnInit {
  cross= faClose
  comparedItems: Topcollection[] = [];

  constructor(private compareService: CompareService, private cartService:addcart ) { }

  ngOnInit(): void {
    // Subscribe to the observable to get the compared items
    this.compareService.getCompareItems().subscribe(
      (items: Topcollection[]) => {
        this.comparedItems = items; // Assign the received items to the local array
      },
      (error: any) => {
        console.error('Error fetching compared items:', error);
      }
    );

  }
  removeItem(item: any): void {
    // Implement your logic to remove the item from the comparedItems array
    const index = this.comparedItems.indexOf(item);
    if (index !== -1) {
      this.comparedItems.splice(index, 1); // Remove the item from the array
    }
  }
}