import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';

import { NgCoreRoutingModule } from './ng-core-routing.module';

import { NgCoreComponent } from './ng-core.component';
import { NgZoneDemoComponent } from './ng-zone-demo/ng-zone-demo.component';
import { ChangeDetectorComponent } from './change-detector/change-detector.component';
import { ViewContainerComponent } from './view-container/view-container.component';

@NgModule({
  declarations: [
    NgCoreComponent,
    NgZoneDemoComponent,
    ChangeDetectorComponent,
    ViewContainerComponent,
  ],
  imports: [SharedModule, NgCoreRoutingModule],
  providers: [],
})
export class NgCoreModule { }
