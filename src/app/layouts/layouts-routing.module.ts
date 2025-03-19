import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ErrorPageComponent } from '../shared/pages/error-page/error-page.component';

const routes: Routes = [
  { 
    path: '', 
    component: MainLayoutComponent, 
    children: [
      {
        path: 'home',
        loadChildren: () => import('../features/home/home.module').then( m => m.HomeModule ),
      },
      {
        path: 'about',
        loadChildren: () => import('../features/about/about.module').then( m => m.AboutModule ),
      },
      {
        path: 'education',
        loadChildren: () => import('../features/education/education.module').then( m => m.EducationModule ),
      },
      {
        path: 'portfolio',
        loadChildren: () => import('../features/portfolio/portfolio.module').then( m => m.PortfolioModule ),
      },
      {
        path: 'blog',
        loadChildren: () => import('../features/blog/blog.module').then( m => m.BlogModule ),
      },
      {
        path: 'contact',
        loadChildren: () => import('../features/contact/contact.module').then( m => m.ContactModule ),
      },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
