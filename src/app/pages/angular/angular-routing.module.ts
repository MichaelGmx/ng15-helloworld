import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularComponent } from './angular.component';

const routes: Routes = [
  {
    path: '',
    component: AngularComponent,
    children: [
      { path: 'life-cycle', loadChildren: () => import('./life-cycle/life-cycle.module').then((m) => m.LifeCycleModule) },
      { path: 'ng-common', loadChildren: () => import('./ng-common/ng-common.module').then((m) => m.NgCommonModule) },
      { path: 'ng-core', loadChildren: () => import('./ng-core/ng-core.module').then((m) => m.NgCoreModule) },
      { path: 'ng-animations', loadChildren: () => import('./ng-animations/ng-animations.module').then((m) => m.NgAnimationsModule) },

      { path: '', redirectTo: 'life-cycle', pathMatch: 'full' },
      { path: '**', redirectTo: 'life-cycle' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
