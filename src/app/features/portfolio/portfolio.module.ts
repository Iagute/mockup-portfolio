import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { GalleryItemComponent } from './components/gallery-item/gallery-item.component';


@NgModule({
  declarations: [
    PortfolioPageComponent,
    GalleryItemComponent,
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
