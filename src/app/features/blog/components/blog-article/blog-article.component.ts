import { Component, Input } from '@angular/core';
import { ArticleItem } from '../../models/blogArticleItems';

@Component({
  selector: 'blog-article',
  standalone: false,
  
  templateUrl: './blog-article.component.html',
  styleUrl: './blog-article.component.css'
})
export class BlogArticleComponent {
  @Input() item!: ArticleItem;

}
