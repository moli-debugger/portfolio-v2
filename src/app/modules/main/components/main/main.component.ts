import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';

import { AboutComponent } from '../about/about.component';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from '../experience/experience.component';
import { HeroComponent } from '../hero/hero.component';
import { SkillComponent } from '../skill/skill.component';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    SkillComponent,
    ExperienceComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements AfterViewInit {
  @ViewChild('navItems') navItems: ElementRef | undefined;
  selectorStyle: { [key: string]: string } = {};
  isNavbarCollapsed = false;
  activeItem: HTMLElement | undefined;

  constructor(
    private renderer: Renderer2,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngAfterViewInit() {
    await setTimeout(() => {
      this.selectNavItem('home');
    }, 600);

    // testi
  }
  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  selectNavItem(item: string) {
    // console.log(item, 'item');
    if (this.navItems) {
      // console.log(this.navItems);
      this.navItems.nativeElement.childNodes.forEach((navItem: any) => {
        this.renderer.removeClass(navItem, 'active');
      });

      const targetNavItem: any = Array.from(
        this.navItems.nativeElement.childNodes
      ).find((navItem: any) => {
        const navItemContent = navItem.textContent.toLowerCase();
        return navItemContent.includes(item.toLowerCase());
      });
      if (targetNavItem) {
        // console.log('targetNavItem', targetNavItem);
        this.renderer.addClass(targetNavItem, 'active');
        this.updateSelector();
        // this.navigate(targetNavItem.innerText);
      }
    }
  }

  updateSelector() {
    if (this.navItems) {
      const nodeElements = this.navItems.nativeElement.childNodes;
      nodeElements.forEach((nodeElement: HTMLElement) => {
        if (nodeElement.classList.contains('active')) {
          this.activeItem = nodeElement as HTMLElement;
        }
      });
      if (this.activeItem && this.activeItem instanceof HTMLElement) {
        let mk = this.activeItem as HTMLElement;
        console.log(typeof mk);

        const itemPosition = this.activeItem.getBoundingClientRect();
        const navbarPosition =
          this.navItems.nativeElement.getBoundingClientRect();

        let activeElementWidth = window.getComputedStyle(this.activeItem);

        this.selectorStyle = {
          top: itemPosition.top - navbarPosition.top + 'px',
          left: this.activeItem.offsetLeft + 'px',
          height: activeElementWidth.height,
          width: activeElementWidth.width,
        };
      }
    }
  }

  // -----------
  navigate(id: string) {
    const element = document.getElementById(id);
    if (!element) {
      return;
    }
    setTimeout(() => {
      element.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  }
}
