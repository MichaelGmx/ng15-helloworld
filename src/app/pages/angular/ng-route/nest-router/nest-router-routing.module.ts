import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NestRouterComponent } from './nest-router/nest-router.component';
import { Child1RouterComponent } from './child1-router.component';
import { Child2RouterComponent } from './child2-router.component';

const routes: Routes = [
  { 
    path: '',
    component: NestRouterComponent,
    // 子路由使用 children
    children: [
      { path: 'child1', component: Child1RouterComponent },
      { path: 'child2', component: Child2RouterComponent },

      { path: '', redirectTo: 'child1', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NestRouterRoutingModule { }
