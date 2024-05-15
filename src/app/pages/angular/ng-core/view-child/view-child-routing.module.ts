import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewChildComponent } from './view-child/view-child.component';

const routes: Routes = [
  { path: '', component: ViewChildComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewChildRoutingModule { }
