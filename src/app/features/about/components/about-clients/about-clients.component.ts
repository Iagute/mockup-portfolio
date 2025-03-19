import { Component } from '@angular/core';

@Component({
  selector: 'about-clients',
  standalone: false,
  
  templateUrl: './about-clients.component.html',
  styleUrl: './about-clients.component.css'
})
export class AboutClientsComponent {

  public clientItem: any[] = [
    { img: 'img/cliente-1.png' },
    { img: 'img/cliente-2.png' },
    { img: 'img/cliente-3.png' },
    { img: 'img/cliente-4.png' },
    { img: 'img/cliente-5.png' },
  ]

}
