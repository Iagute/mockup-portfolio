import { Component } from '@angular/core';

@Component({
  selector: 'contact-form',
  standalone: false,
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

  public isLoading: boolean = true;

  constructor() {}

  onLoadMap(): void {
    this.isLoading = false;
  }

}
