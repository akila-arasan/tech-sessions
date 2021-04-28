import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlidesComponent } from './pages/slides/slides/slides.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sd-session-docs',
    pathMatch: 'full'
  },
  {
    path: 'sd-session-docs',
    children: [
      {
        path: ':id',
        component: SlidesComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
