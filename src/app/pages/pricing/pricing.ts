import { Component } from '@angular/core';
import { PRICING_CONTENT } from '../../data/pricing-data';

@Component({
  selector: 'app-pricing',
  imports: [],
  templateUrl: './pricing.html',
  styleUrl: './pricing.scss',
})
export class Pricing {
  readonly content = PRICING_CONTENT;
}
