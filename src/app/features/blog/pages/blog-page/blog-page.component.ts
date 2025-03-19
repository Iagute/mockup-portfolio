import { Component } from '@angular/core';
import { ArticleItem } from '../../models/blogArticleItems';

@Component({
  standalone: false,  
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.css'
})
export class BlogPageComponent {

  public articleItems: ArticleItem[] = [
    {
      category: 'Desarrollo',
      date: '30/08/2024',
      icon: 'fa-book',
      img: 'img/articulo-1.jpg',
      title: 'Como aprender a programar en 2024'
    },
    {
      category: 'Desarrollo',
      date: '05/09/2024',
      icon: 'fa-book',
      img: 'img/articulo-2.jpg',
      title: 'Cómo hacer animaciones en CSS'
    },
    {
      category: 'Desarrollo',
      date: '30/10/2024',
      icon: 'fa-book',
      img: 'img/articulo-3.jpg',
      title: 'Como usar el LocalStorage en JS'
    },
    {
      category: 'Desarrollo',
      date: '01/06/2025',
      icon: 'fa-book',
      img: 'img/articulo-4.jpg',
      title: 'Cómo maquetar una web'
    },
  ]

}
