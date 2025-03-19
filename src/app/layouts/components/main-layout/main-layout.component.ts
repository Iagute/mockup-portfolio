import { Component, ViewEncapsulation } from '@angular/core';
import { layoutOption } from '../../../core/models/layoutMenu';

@Component({
  selector: 'main-layout',
  standalone: false,
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css', '/src/css/responsive.css'],  // Corregido de styleUrl a styleUrls
  encapsulation: ViewEncapsulation.None // Desactiva la encapsulación de estilos
})
export class MainLayoutComponent {

  public toggleMenu: boolean = false;
  public menuOptions: layoutOption[] = [
    {
      name: 'Home',
      icon: 'fa-solid fa-house',
      route: 'home'
    },
    {
      name: 'Sobre mi',
      icon: 'fa-solid fa-user',
      route: 'about'
    },
    {
      name: 'Estudios',
      icon: 'fa-solid fa-graduation-cap',
      route: 'education'
    },
    {
      name: 'Portafolio',
      icon: 'fa-solid fa-briefcase',
      route: 'portfolio'
    },
    {
      name: 'Blog',
      icon: 'fa-solid fa-book',
      route: 'blog'
    },
    {
      name: 'Contacto',
      icon: 'fa-solid fa-envelope',
      route: 'contact'
    },
  ]

  constructor() {}

  onToggle() {
    this.toggleMenu = !this.toggleMenu
  }



}
