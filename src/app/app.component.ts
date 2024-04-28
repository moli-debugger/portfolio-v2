import { Component, Inject, PLATFORM_ID } from '@angular/core';

import { MainComponent } from './modules/main/components/main/main.component';
import { RouterOutlet } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'moli Portfolio';
  constructor(@Inject(DOCUMENT) private document: Document) {}
}
