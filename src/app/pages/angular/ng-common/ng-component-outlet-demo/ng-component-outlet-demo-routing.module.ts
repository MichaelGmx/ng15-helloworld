import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgComponentOutletDemoComponent } from './ng-component-outlet-demo.component';

const routes: Routes = [
  { path: '', component: NgComponentOutletDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgComponentOutletDemoRoutingModule { }
