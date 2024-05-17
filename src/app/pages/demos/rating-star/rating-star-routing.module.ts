import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RatingStarComponent } from './rating-star.component';

const routes: Routes = [
  { path: '', component: RatingStarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RatingStarRoutingModule { }
