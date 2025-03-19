import { Component } from '@angular/core';
import { Progressbar } from '../../models/skillsBars';

@Component({
  selector: 'resume-right',
  standalone: false,
  
  templateUrl: './resume-right.component.html',
  styleUrl: './resume-right.component.css'
})
export class ResumeRightComponent {

  public designItems: Progressbar[] = [
    {
      text: 'Diseño Web',
      number: '90%'
    },
    {
      text: 'Diseño Mockups',
      number: '70%'
    },
    {
      text: 'Diseño Logos',
      number: '60%'
    },
    {
      text: 'Diseño Banners',
      number: '80%'
    },
  ]

  public codeItems: Progressbar[] = [
    {
      text: 'HTML / CSS',
      number: '97%'
    },
    {
      text: 'JavaScript',
      number: '70%'
    },
    {
      text: 'Angular',
      number: '80%'
    },
    {
      text: 'Typescript',
      number: '92%'
    },
    {
      text: 'Node.Js',
      number: '82%'
    },
  ]

  constructor() {}

}
