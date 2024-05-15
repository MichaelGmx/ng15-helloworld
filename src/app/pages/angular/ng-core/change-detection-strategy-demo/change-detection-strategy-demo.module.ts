import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';

import { ChangeDetectionStrategyDemoRoutingModule } from './change-detection-strategy-demo-routing.module';

import { ChangeDetectionStrategyDemoComponent } from './change-detection-strategy-demo/change-detection-strategy-demo.component';
import { DefaultStrategyComponent } from './default-strategy/default-strategy.component';
import { OnPushStrategyComponent } from './on-push-strategy/on-push-strategy.component';


@NgModule({
  declarations: [
    ChangeDetectionStrategyDemoComponent,
    DefaultStrategyComponent,
    OnPushStrategyComponent,
  ],
  imports: [
    SharedModule,

    ChangeDetectionStrategyDemoRoutingModule
  ]
})
export class ChangeDetectionStrategyDemoModule { }
