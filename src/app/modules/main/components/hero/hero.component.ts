import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements AfterViewInit {
  phrases: string[] = [
    'Fullstack developer.',
    'speaker.',
    'open source contributor.',
  ];
  period: number = 2000;
  index: number = 0;
  interval: any;

  constructor() {}

  ngAfterViewInit() {
    this.rotateText();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  private async rotateText() {
    const textElement = document.querySelector('.txt-rotate');
    if (textElement) {
      const typingSpeed = 100; // Adjust typing speed as needed
      let i = 0;
      const typeInterval = setInterval(() => {
        textElement.textContent += this.phrases[this.index].charAt(i);
        i++;
        if (i > this.phrases[this.index].length) {
          clearInterval(typeInterval);
          this.index++;
          if (this.index < this.phrases.length) {
            setTimeout(() => {
              textElement.textContent = '';
              this.rotateText();
            }, 1000); // Delay before typing the next text
          } else {
            this.index = 0;
            setTimeout(() => {
              textElement.textContent = '';
              this.rotateText();
            }, 1000);
          }
        }
      }, typingSpeed);
    }
  }
}
