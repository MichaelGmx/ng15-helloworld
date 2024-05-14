import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoCheckParentComponent } from './do-check-parent/do-check-parent.component';

const routes: Routes = [
  { path: '', component: DoCheckParentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoCheckRoutingModule { }
