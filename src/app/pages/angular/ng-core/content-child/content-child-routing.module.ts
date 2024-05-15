import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentChildComponent } from './content-child/content-child.component';

const routes: Routes = [
  { path: '', component: ContentChildComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentChildRoutingModule { }
