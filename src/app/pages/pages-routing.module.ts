import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'getting-started', loadChildren: () => import('./getting-started/getting-started.module').then((m) => m.GettingStartedModule) },

      { path: 'angular', loadChildren: () => import('./angular/angular.module').then((m) => m.AngularModule) },
      { path: 'material', loadChildren: () => import('./material/material.module').then((m) => m.MaterialModule) },

      { path: '', redirectTo: 'angular', pathMatch: 'full' },
      { path: '**', redirectTo: 'angular' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
