import { Component } from '@angular/core';
import { LOGO_ITEMS, LogoItem } from '../../data/logo-marquee-data';

@Component({
  selector: 'app-logo-marquee',
  templateUrl: './logo-marquee.html',
  styleUrl: './logo-marquee.scss'
})
export class LogoMarquee {
  readonly logos: LogoItem[] = this.shuffle([...LOGO_ITEMS]);
  readonly displayLogos: LogoItem[] = [...this.logos, ...this.logos];

  private shuffle(items: LogoItem[]): LogoItem[] {
    for (let i = items.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
  }
}
