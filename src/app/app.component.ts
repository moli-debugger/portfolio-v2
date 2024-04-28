import { Component } from '@angular/core';
import { HeroComponent } from './modules/main/components/hero/hero.component';
import { MainComponent } from './modules/main/components/main/main.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'moliPortfolioV2';
}
