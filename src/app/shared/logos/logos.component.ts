import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logos.component.html',
  styleUrl: './logos.component.css'
})
export class LogosComponent implements OnInit {
  slides: any[] = [
    { src: 'assets/images/logo1.png', alt: 'Logo 1' },
    { src: 'assets/images/logo2.png', alt: 'Logo 2' },
    { src: 'assets/images/logo3.png', alt: 'Logo 3' },
    { src: 'assets/images/logo4.png', alt: 'Logo 4' },
    { src: 'assets/images/logo6.png', alt: 'Logo 6' } // Include logo6
  ];
  currentSlideIndex = 0;
  slideWidth!: number;
  isSliding = false; // Track ongoing slide transition

  constructor() { }

  ngOnInit() {
    this.slideWidth = Math.floor(window.innerWidth / 4); // Calculate based on 4 images
  }

  nextSlide() {
    if (!this.isSliding) { // Prevent multiple clicks during transition
      this.isSliding = true;
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
      setTimeout(() => this.isSliding = false, 500); // Debounce for transition duration
    }
  }

  prevSlide() {
    if (!this.isSliding) {
      this.isSliding = true;
      this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
      setTimeout(() => this.isSliding = false, 500);
    }
  }

}