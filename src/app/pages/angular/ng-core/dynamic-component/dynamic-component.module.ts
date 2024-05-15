import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';

import { DynamicComponentRoutingModule } from './dynamic-component-routing.module';

import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { UxAlertComponent } from './ux-alert/ux-alert.component';


@NgModule({
  declarations: [
    DynamicComponentComponent,
    UxAlertComponent,
  ],
  imports: [
    SharedModule,
    
    DynamicComponentRoutingModule
  ]
})
export class DynamicComponentModule { }
