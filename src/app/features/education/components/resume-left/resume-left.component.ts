import { Component } from '@angular/core';
import { timelineItems } from '../../models/timelineItems';

@Component({
  selector: 'resume-left',
  standalone: false,
  
  templateUrl: './resume-left.component.html',
  styleUrl: './resume-left.component.css'
})
export class ResumeLeftComponent {

  public timelineItems: timelineItems[] = [
    {
      year: '2010',
      company: 'Universidad de Madrid',
      title: 'Desarrollo Web',
      text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Sunt, libero. Repellat culpa, odio laboriosam blanditiis consequatur fugit nemo itaque sed atque architecto rerum, ratione ducimus voluptatem,
              autem voluptatibus quaerat amet.`
    },
    {
      year: '2008',
      company: 'Universidad de Madrid',
      title: 'Edición de video',
      text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Sunt, libero. Repellat culpa, odio laboriosam blanditiis consequatur fugit nemo itaque sed atque architecto rerum, ratione ducimus voluptatem,
              autem voluptatibus quaerat amet.`
    },
  ]
  public timelineExperience: timelineItems[] = [
    {
      year: '2013 - 2014',
      company: 'Youtube',
      title: 'Desarrollador PhP',
      text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Sunt, libero. Repellat culpa, odio laboriosam blanditiis consequatur fugit nemo itaque sed atque architecto rerum, ratione ducimus voluptatem,
              autem voluptatibus quaerat amet.`
    },
    {
      year: '2015 - 2024',
      company: 'Google',
      title: 'Desarrollo Web Senior',
      text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Sunt, libero. Repellat culpa, odio laboriosam blanditiis consequatur fugit nemo itaque sed atque architecto rerum, ratione ducimus voluptatem,
              autem voluptatibus quaerat amet.`
    },
    {
      year: '2016 - 2022',
      company: 'Youtube',
      title: 'Edición de video',
      text: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Sunt, libero. Repellat culpa, odio laboriosam blanditiis consequatur fugit nemo itaque sed atque architecto rerum, ratione ducimus voluptatem,
              autem voluptatibus quaerat amet.`
    },
  ]

  constructor() {}

  
  
}
