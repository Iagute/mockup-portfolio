import { Component } from '@angular/core';

@Component({
  selector: 'resume-knowledge',
  standalone: false,
  
  templateUrl: './resume-knowledge.component.html',
  styleUrl: './resume-knowledge.component.css'
})
export class ResumeKnowledgeComponent {

  knowledgeItems: any[] = [
    { title: 'Programación' },
    { title: 'Desarrollo Web' },
    { title: 'Redes sociales' },
    { title: 'Comunicación' },
    { title: 'Edición de videos' },
    { title: 'Formación' },
  ]

}
