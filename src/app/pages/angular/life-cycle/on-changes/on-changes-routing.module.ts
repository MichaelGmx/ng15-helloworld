import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnChangesParentComponent } from './on-changes-parent/on-changes-parent.component';

const routes: Routes = [
  { path: '', component: OnChangesParentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnChangesRoutingModule { }
