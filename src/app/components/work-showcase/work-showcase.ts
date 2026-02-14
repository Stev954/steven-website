import { Component } from '@angular/core';
import { WORK_ITEMS, WORK_SECTION, WorkItem } from '../../data/work-showcase-data';

@Component({
  selector: 'app-work-showcase',
  templateUrl: './work-showcase.html',
  styleUrl: './work-showcase.scss'
})
export class WorkShowcase {
  readonly section = WORK_SECTION;
  readonly workItems: WorkItem[] = WORK_ITEMS;
}
