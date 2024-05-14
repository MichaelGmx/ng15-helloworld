import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgCommonComponent } from './ng-common.component';
import { NgIfDemoComponent } from './ng-if-demo/ng-if-demo.component';
import { NgForDemoComponent } from './ng-for-demo/ng-for-demo.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';

const routes: Routes = [
  {
    path: '',
    component: NgCommonComponent,
    children: [
      { path: 'ng-if', component: NgIfDemoComponent },
      { path: 'ng-for', component: NgForDemoComponent },
      { path: 'pipe', component: PipeDemoComponent },
      { path: 'ng-template-outlet', loadChildren: () => import('./ng-template-outlet-demo/ng-template-outlet-demo.module').then(m => m.NgTemplateOutletDemoModule) },
      { path: 'ng-component-outlet', loadChildren: () => import('./ng-component-outlet-demo/ng-component-outlet-demo.module').then(m => m.NgComponentOutletDemoModule) },

      { path: '', redirectTo: 'ng-if', pathMatch: 'full' },
      { path: '**', redirectTo: 'ng-if' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgCommonRoutingModule { }
