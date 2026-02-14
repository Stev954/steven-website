import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  @Input() backgroundUrl = '';
  @Input() title = '';
  @Input() subtitle = '';
  @Input() subtitleHtml = '';
  @Input() reverseOrder = false;
}
