import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplateContainerRefComponent } from './template-container-ref/template-container-ref.component';

const routes: Routes = [
  { path: '', component: TemplateContainerRefComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateContainerRefRoutingModule { }
