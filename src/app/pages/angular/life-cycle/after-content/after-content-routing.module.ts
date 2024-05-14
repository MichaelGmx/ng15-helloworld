import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterContentParentComponent } from './after-content-parent/after-content-parent.component';

const routes: Routes = [
  { path: '', component: AfterContentParentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfterContentRoutingModule { }
