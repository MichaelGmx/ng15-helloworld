import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { RatingStarRoutingModule } from './rating-star-routing.module';

import { RatingStarComponent } from './rating-star.component';
import { StarRaterComponent } from './star-rater/star-rater.component';

@NgModule({
  declarations: [
    RatingStarComponent,

    StarRaterComponent,
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,

    RatingStarRoutingModule
  ]
})
export class RatingStarModule { }
