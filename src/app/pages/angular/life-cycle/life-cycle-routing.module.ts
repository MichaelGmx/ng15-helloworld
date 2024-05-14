import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LifeCycleComponent } from './life-cycle.component';

const routes: Routes = [
  {
    path: '',
    component: LifeCycleComponent,
    children: [
      { path: 'peek-a-boo', loadChildren: () => import('./peek-a-boo/peek-a-boo.module').then(m => m.PeekABooModule) },
      { path: 'spy', loadChildren: () => import('./spy/spy.module').then((m) => m.SpyModule) },
      { path: 'on-changes', loadChildren: () => import('./on-changes/on-changes.module').then(m => m.OnChangesModule) },
      { path: 'do-check', loadChildren: () => import('./do-check/do-check.module').then(m => m.DoCheckModule) },
      { path: 'after-view', loadChildren: () => import('./after-view/after-view.module').then(m => m.AfterViewModule) },
      { path: 'after-content', loadChildren: () => import('./after-content/after-content.module').then(m => m.AfterContentModule) },
      { path: 'counter-spy', loadChildren: () => import('./counter-spy/counter-spy.module').then(m => m.CounterSpyModule) },

      { path: '', redirectTo: 'peek-a-boo', pathMatch: 'full' },
      { path: '**', redirectTo: 'peek-a-boo' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifeCycleRoutingModule { }
