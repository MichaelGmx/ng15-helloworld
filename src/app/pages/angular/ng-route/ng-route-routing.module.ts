import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgRouteComponent } from './ng-route.component';
import { ActivatedRouteDemoComponent } from './activated-route-demo/activated-route-demo.component';

const routes: Routes = [
  {
    path: '',
    component: NgRouteComponent,
    children: [
      { path: 'activated-route', component: ActivatedRouteDemoComponent },
      { path: 'nest-router', loadChildren: () => import('./nest-router/nest-router.module').then(m => m.NestRouterModule)},

      { path: '', redirectTo: 'activated-route', pathMatch: 'full' },
      { path: '**', redirectTo: 'activated-route' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgRouteRoutingModule { }
