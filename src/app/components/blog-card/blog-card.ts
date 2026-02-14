import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogPost } from '../../data/blog-popular-data';

@Component({
  selector: 'app-blog-card',
  imports: [RouterLink],
  templateUrl: './blog-card.html',
  styleUrl: './blog-card.scss'
})
export class BlogCard {
  @Input({ required: true }) post!: BlogPost;
}
