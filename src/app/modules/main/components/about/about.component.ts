import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  @ViewChild('borderBack') borderBack!: ElementRef;
  @ViewChild('borderFront') borderFront!: ElementRef;
  isHovered: boolean = false;
  currentImageUrlIndex = 0;
  imageUrls = [
    '../../assets/image/Image.jpg',
    '../../assets/image/About/2.jpg',
    '../../assets/image/About/3.jpg',
    '../../assets/image/About/4.png',
  ];

  constructor(private renderer: Renderer2) {}
  toggleSpin() {
    // this.isHovered = !this.isHovered;
    this.isHovered = false;
  }
  // ngAfterViewInit() {
  //   setInterval(() => {
  //     this.rotateImage();
  //   }, 5000); // Rotate every 5 seconds (adjust as needed)
  // }

  rotateImage() {
    this.currentImageUrlIndex =
      (this.currentImageUrlIndex + 1) % this.imageUrls.length;
  }
}
