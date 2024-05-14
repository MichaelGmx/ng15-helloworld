import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';

import { NgCoreRoutingModule } from './ng-core-routing.module';

import { NgCoreComponent } from './ng-core.component';
import { InjectDemoComponent } from './inject-demo/inject-demo.component';

@NgModule({
  declarations: [NgCoreComponent, InjectDemoComponent],
  imports: [SharedModule, NgCoreRoutingModule],
  providers: [],
})
export class NgCoreModule { }
