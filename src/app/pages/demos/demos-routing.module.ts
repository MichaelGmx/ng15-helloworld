import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemosComponent } from './demos.component';

const routes: Routes = [
  {
    path: '',
    component: DemosComponent,
    children: [
      { path: 'todo', loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule) },
      { path: 'rating-star', loadChildren: () => import('./rating-star/rating-star.module').then(m => m.RatingStarModule) },
      // { path: 'hacker-news', loadChildren: () => import('./hacker-news/hacker-news.module').then(m => m.HackerNewsModule) },

      { path: '', redirectTo: 'todo', pathMatch: 'full' },
      { path: '**', redirectTo: 'todo' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule { }
