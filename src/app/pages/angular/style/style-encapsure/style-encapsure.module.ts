import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';

import { StyleEncapsureRoutingModule } from './style-encapsure-routing.module';

import { StyleEncapsureComponent } from './style-encapsure/style-encapsure.component';
import { HostContextDemoComponent } from './host-context-demo/host-context-demo.component';
import { HostDemoComponent } from './host-demo/host-demo.component';
import { NgDeepDemoComponent } from './ng-deep-demo/ng-deep-demo.component';

@NgModule({
  declarations: [
    StyleEncapsureComponent,
    HostContextDemoComponent,
    HostDemoComponent,
    NgDeepDemoComponent,
  ],
  imports: [
    SharedModule,

    StyleEncapsureRoutingModule,
  ]
})
export class StyleEncapsureModule { }
