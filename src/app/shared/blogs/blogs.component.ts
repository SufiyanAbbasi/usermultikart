import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {

  blog: any = [
    {
      id:0,
      img: 'assets/images/blog1.jpg',
      date: '25 January 2018',
    },
    {
      id:1,
      img: 'assets/images/blog2.jpg',
      date: '26 January 2018',
    },
    {
      id:2,
      img: 'assets/images/blog3.jpg',
      date: '27 January 2018',
    },

  ]

}
