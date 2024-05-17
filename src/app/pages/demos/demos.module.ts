import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';

import { DemosRoutingModule } from './demos-routing.module';

import { DemosComponent } from './demos.component';

@NgModule({
  declarations: [DemosComponent],
  imports: [SharedModule, DemosRoutingModule],
  providers: [],
})
export class DemosModule { }
