import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { LogoMarquee } from '../../components/logo-marquee/logo-marquee';
import { WorkShowcase } from '../../components/work-showcase/work-showcase';
import { ServicesList } from '../../components/services-list/services-list';

@Component({
  selector: 'app-home-page',
  imports: [Hero, ServicesList, LogoMarquee, WorkShowcase],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomePage {}
