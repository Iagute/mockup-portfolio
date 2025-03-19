import { Component } from '@angular/core';
import { certificateItems } from '../../models/certificateItems';

@Component({
  selector: 'resume-certificates',
  standalone: false,
  
  templateUrl: './resume-certificates.component.html',
  styleUrl: './resume-certificates.component.css'
})
export class ResumeCertificatesComponent {

  certificateItems: certificateItems[] = [
    {
      img: 'img/certificado-1.png',
      title: 'Master en PhP, Sql, POO, MVC, Laravel, Symfony, Wordpress +',
      id: 1,
      date: '10 Junio 2023'
    },
    {
      img: 'img/certificado-1.png',
      title: 'Master en Pruebas técnicas: +70 Nuevos Ejercicios de código',
      id: 2,
      date: '10 Mayo 2024'
    },
  ]

}
