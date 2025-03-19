import { Component } from '@angular/core';
import { GalleryCategory, GalleryItem } from '../../models/galleryItem';

@Component({
  standalone: false,
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.css'
})
export class PortfolioPageComponent {
  public linkOptions: GalleryCategory[] = [
    'Todo',
    'Cursos',
    'Web',
    'Redes Sociales',
    'Videos',
    'Proyectos'
  ];

  public galleryItems: GalleryItem[] = [
    {
      image: 'img/galeria-1.jpg',
      title: 'Producción de Video',
      icon: 'fa-video-camera',
      category: ['Videos']
    },
    {
      image: 'img/galeria-2.jpg',
      title: 'Máster en JavaScript',
      icon: 'fa-code',
      category: ['Cursos', 'Web']
    },
    {
      image: 'img/galeria-3.jpg',
      title: 'Master en React',
      icon: 'fa-code-commit',
      category: ['Cursos', 'Web']
    },
    {
      image: 'img/galeria-4.jpg',
      title: 'Red Social tipo Twitter',
      icon: 'fa-user',
      category: ['Web', 'Redes Sociales']
    },
    {
      image: 'img/galeria-5.jpg',
      title: 'Máster en Lógica de programación',
      icon: 'fa-code',
      category: ['Cursos']
    },
    {
      image: 'img/galeria-6.jpg',
      title: 'Galería de imágenes',
      icon: 'fa-image-portrait',
      category: ['Proyectos']
    },
  ];
  
  public filteredGalleryItems: GalleryItem[] = this.galleryItems;
  public selectedCategory: GalleryCategory = 'Todo';

  constructor() {}

  filterByCategory(selectedCategory: GalleryCategory) {
    this.selectedCategory = selectedCategory;
  
    if (selectedCategory === 'Todo') {
      this.filteredGalleryItems = this.galleryItems;
    } else {
      this.filteredGalleryItems = this.galleryItems.filter(item =>
        item.category.includes(selectedCategory) // Verificar si la categoría seleccionada está en el array
      );
    }
  }



}
