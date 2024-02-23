import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-furniture',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './furniture.component.html',
  styleUrl: './furniture.component.css'
})
export class FurnitureComponent {

  furnitureblog: any = [
    {
      id:0,
      img: 'assets/images/furniture/fur14.jpg',
      date: '25 January 2018',
    },
    {
      id:1,
      img: 'assets/images/furniture/fur15.jpg',
      date: '26 January 2018',
    },
    {
      id:2,
      img: 'assets/images/furniture/fur16.jpg',
      date: '27 January 2018',
    },

  ]

}
