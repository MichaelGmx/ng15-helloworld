import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StyleEncapsureComponent } from './style-encapsure/style-encapsure.component';

const routes: Routes = [
  { path: '', redirectTo: 'style-encapsure', pathMatch: 'full' },

  { path: 'style-encapsure', component: StyleEncapsureComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StyleEncapsureRoutingModule { }
