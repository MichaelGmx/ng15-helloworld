import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpyComponent } from './spy/spy.component';

const routes: Routes = [
  { path: '', component: SpyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpyRoutingModule { }
