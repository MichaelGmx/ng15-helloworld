import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';

import { NgContentDemoRoutingModule } from './ng-content-demo-routing.module';

import { NgContentDemoComponent } from './ng-content-demo/ng-content-demo.component';
import { ZippyBasicComponent } from './zippy-basic/zippy-basic.component';
import { ZippyMultislotComponent } from './zippy-multislot/zippy-multislot.component';
import { ConditionalContentDemoComponent } from './conditional-content-demo/conditional-content-demo.component';
import { ZippyToggleBtnDirective } from './zippy-toggle-btn.directive';
import { ZippyContentDirective } from './zippy-content.directive';


@NgModule({
  declarations: [
    NgContentDemoComponent,
    ZippyBasicComponent,
    ZippyMultislotComponent,
    ConditionalContentDemoComponent,

    ZippyToggleBtnDirective,
    ZippyContentDirective
  ],
  imports: [
    SharedModule,

    NgContentDemoRoutingModule
  ]
})
export class NgContentDemoModule { }
