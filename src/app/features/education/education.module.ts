import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';
import { EducationPageComponent } from './pages/education-page/education-page.component';
import { ResumeLeftComponent } from './components/resume-left/resume-left.component';
import { ResumeRightComponent } from './components/resume-right/resume-right.component';
import { ResumeKnowledgeComponent } from './components/resume-knowledge/resume-knowledge.component';
import { ResumeCertificatesComponent } from './components/resume-certificates/resume-certificates.component';


@NgModule({
  declarations: [
    EducationPageComponent,
    ResumeLeftComponent,
    ResumeRightComponent,
    ResumeKnowledgeComponent,
    ResumeCertificatesComponent
  ],
  imports: [
    CommonModule,
    EducationRoutingModule
  ]
})
export class EducationModule { }
