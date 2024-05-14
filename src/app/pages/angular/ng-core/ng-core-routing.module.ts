import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgCoreComponent } from './ng-core.component';
import { InjectDemoComponent } from './inject-demo/inject-demo.component';

const routes: Routes = [
  {
    path: '',
    component: NgCoreComponent,
    children: [
      { path: 'inject-demo', component: InjectDemoComponent },

      { path: '', redirectTo: 'inject-demo', pathMatch: 'full' },
      { path: '**', redirectTo: 'inject-demo' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgCoreRoutingModule { }
