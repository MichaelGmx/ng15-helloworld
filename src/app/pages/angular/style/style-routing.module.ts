import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StyleComponent } from './style.component';

const routes: Routes = [
  {
    path: '',
    component: StyleComponent,
    children: [
      { path: 'style-encapsure', loadChildren: () => import('./style-encapsure/style-encapsure.module').then(m => m.StyleEncapsureModule) },
      { path: 'theme', loadChildren: () => import('./theme-demo/theme-demo.module').then(m => m.ThemeDemoModule) },

      { path: '', redirectTo: 'style-encapsure', pathMatch: 'full' },
      { path: '**', redirectTo: 'style-encapsure' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StyleRoutingModule { }
