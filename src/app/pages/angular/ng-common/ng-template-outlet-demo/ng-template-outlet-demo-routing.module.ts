import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgTemplateOutletDemoComponent } from './ng-template-outlet-demo/ng-template-outlet-demo.component';

const routes: Routes = [
  { path: '', component: NgTemplateOutletDemoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgTemplateOutletDemoRoutingModule { }
