import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeekABooParentComponent } from './peek-a-boo-parent/peek-a-boo-parent.component';

const routes: Routes = [
  { path: '', component: PeekABooParentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeekABooRoutingModule { }
