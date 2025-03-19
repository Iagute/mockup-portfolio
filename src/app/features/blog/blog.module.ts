import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { BlogArticleComponent } from './components/blog-article/blog-article.component';


@NgModule({
  declarations: [
    BlogPageComponent,
    BlogArticleComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
