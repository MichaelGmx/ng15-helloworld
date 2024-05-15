import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InjectDemoComponent } from './inject-demo.component';

const routes: Routes = [
  { path: '', component: InjectDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InjectDemoRoutingModule { }
