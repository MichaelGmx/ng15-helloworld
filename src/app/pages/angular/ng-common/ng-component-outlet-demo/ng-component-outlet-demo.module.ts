import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';

import { NgComponentOutletDemoRoutingModule } from './ng-component-outlet-demo-routing.module';

import { NgComponentOutletDemoComponent } from './ng-component-outlet-demo.component';

import { CompAComponent } from './comp-a.component';
import { CompBComponent } from './comp-b.component';
import { CompCComponent } from './comp-c.component';

@NgModule({
  declarations: [
    NgComponentOutletDemoComponent,

    CompAComponent,
    CompBComponent,
    CompCComponent
  ],
  imports: [
    SharedModule,

    NgComponentOutletDemoRoutingModule
  ]
})
export class NgComponentOutletDemoModule { }
