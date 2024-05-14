import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';

import { LifeCycleRoutingModule } from './life-cycle-routing.module';

import { LifeCycleComponent } from './life-cycle.component';

@NgModule({
  declarations: [LifeCycleComponent],
  imports: [SharedModule, LifeCycleRoutingModule],
  providers: [],
})
export class LifeCycleModule { }
