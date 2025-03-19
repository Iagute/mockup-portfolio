import { Component } from '@angular/core';
import { ServiceItem } from '../../models/ServiceItem';

@Component({
  selector: 'about-services',
  standalone: false,
  
  templateUrl: './about-services.component.html',
  styleUrl: './about-services.component.css'
})
export class AboutServicesComponent {

  public serviceItem: ServiceItem[] = [
    {
      icon: 'fa-code',
      title: 'Programación',
      description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Sequi, facilis vero obcaecati ea porro consequuntur ipsa ex accusamus 
        consequatur nesciunt suscipit voluptate quaerat a quidem harum doloremque expedita est facere?
      `
    },
    {
      icon: 'fa-chalkboard-user',
      title: 'Formación',
      description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Sequi, facilis vero obcaecati ea porro consequuntur ipsa ex accusamus 
        consequatur nesciunt suscipit voluptate quaerat a quidem harum doloremque expedita est facere?
      `
    },
    {
      icon: 'fa-computer',
      title: 'Desarrollo Web',
      description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Sequi, facilis vero obcaecati ea porro consequuntur ipsa ex accusamus 
        consequatur nesciunt suscipit voluptate quaerat a quidem harum doloremque expedita est facere?
      `
    },
    {
      icon: 'fa-terminal',
      title: 'Administración',
      description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Sequi, facilis vero obcaecati ea porro consequuntur ipsa ex accusamus 
        consequatur nesciunt suscipit voluptate quaerat a quidem harum doloremque expedita est facere?
      `
    },
  ]

}
