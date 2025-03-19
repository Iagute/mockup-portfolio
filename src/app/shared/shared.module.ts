import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    ErrorPageComponent,
    LoadingSpinnerComponent
  ],
  exports: [
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
