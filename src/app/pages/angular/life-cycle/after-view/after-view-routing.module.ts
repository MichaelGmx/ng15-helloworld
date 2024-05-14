import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterViewParentComponent } from './after-view-parent/after-view-parent.component';

const routes: Routes = [
  { path: '', component: AfterViewParentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfterViewRoutingModule { }
