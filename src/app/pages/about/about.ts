import { Component } from '@angular/core';
import { ABOUT_CONTENT, AboutBlock } from '../../data/about-data';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  readonly blocks: AboutBlock[] = ABOUT_CONTENT.blocks;
}
