import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';

import { NgTemplateOutletDemoRoutingModule } from './ng-template-outlet-demo-routing.module';

import { NgTemplateOutletDemoComponent } from './ng-template-outlet-demo/ng-template-outlet-demo.component';
import { NgTemplateOutletChildComponent } from './ng-template-outlet-child/ng-template-outlet-child.component';

@NgModule({
  declarations: [
    NgTemplateOutletDemoComponent,
    NgTemplateOutletChildComponent
  ],
  imports: [
    SharedModule,

    NgTemplateOutletDemoRoutingModule
  ]
})
export class NgTemplateOutletDemoModule { }
