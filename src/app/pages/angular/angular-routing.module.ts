import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularComponent } from './angular.component';

const routes: Routes = [
  {
    path: '',
    component: AngularComponent,
    children: [
      { path: 'ng-core', loadChildren: () => import('./ng-core/ng-core.module').then((m) => m.NgCoreModule) },
      { path: 'ng-animations', loadChildren: () => import('./ng-animations/ng-animations.module').then((m) => m.NgAnimationsModule) },

      { path: '', redirectTo: 'ng-core', pathMatch: 'full' },
      { path: '**', redirectTo: 'ng-core' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
