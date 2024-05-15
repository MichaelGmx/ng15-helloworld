import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgContentDemoComponent } from './ng-content-demo/ng-content-demo.component';

const routes: Routes = [
  { path: '', component: NgContentDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgContentDemoRoutingModule { }
