import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ContactPageComponent,
    ContactInfoComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
