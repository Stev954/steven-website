import { AfterViewInit, Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss'
})
export class SiteHeader implements AfterViewInit {
  isScrolled = false;
  isBlog = false;

  constructor(private readonly router: Router) {
   
  }

  ngAfterViewInit(): void {
    
    this.onScroll();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const heroEl = document.querySelector<HTMLElement>('.hero');
    if (!heroEl) {
      this.isScrolled = true;
      return;
    }
    const rect = heroEl.getBoundingClientRect();
    this.isScrolled = rect.bottom <= 80;
  }
}
