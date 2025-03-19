import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AboutPersonalInfoComponent } from './components/about-personal-info/about-personal-info.component';
import { AboutServicesComponent } from './components/about-services/about-services.component';
import { AboutReviewsComponent } from './components/about-reviews/about-reviews.component';
import { AboutClientsComponent } from './components/about-clients/about-clients.component';
import { AboutPricesComponent } from './components/about-prices/about-prices.component';
import { AboutExtraComponent } from './components/about-extra/about-extra.component';


@NgModule({
  declarations: [
    AboutPageComponent,
    AboutPersonalInfoComponent,
    AboutServicesComponent,
    AboutReviewsComponent,
    AboutClientsComponent,
    AboutPricesComponent,
    AboutExtraComponent,
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
