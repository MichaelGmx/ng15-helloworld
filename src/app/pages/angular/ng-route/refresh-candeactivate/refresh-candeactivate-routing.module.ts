import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefreshCandeactivatePage } from './refresh-candeactivate.page';

const routes: Routes = [
  { path: '', component: RefreshCandeactivatePage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefreshCandeactivatePageRoutingModule {}
