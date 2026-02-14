import { Component } from '@angular/core';
import { SERVICES } from '../../data/services-data';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.html',
  styleUrl: './services-list.scss'
})
export class ServicesList {
  readonly services = SERVICES;
}
