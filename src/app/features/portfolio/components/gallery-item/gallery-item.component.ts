import { Component, Input } from '@angular/core';
import { GalleryItem } from '../../models/galleryItem';

@Component({
  selector: 'portfolio-gallery-item',
  standalone: false,
  templateUrl: './gallery-item.component.html',
  styleUrl: './gallery-item.component.css'
})
export class GalleryItemComponent {
  @Input() item!: GalleryItem

}
