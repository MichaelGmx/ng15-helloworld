import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/@shared/shared.module';

import { NgCommonRoutingModule } from './ng-common-routing.module';

import { NgCommonComponent } from './ng-common.component';
import { NgIfDemoComponent } from './ng-if-demo/ng-if-demo.component';
import { NgForDemoComponent } from './ng-for-demo/ng-for-demo.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';

@NgModule({
  declarations: [
    NgCommonComponent,
    NgIfDemoComponent,
    NgForDemoComponent,
    PipeDemoComponent,
  ],
  imports: [
    SharedModule,  // 包含 CommonModule
    NgCommonRoutingModule
  ]
})
export class NgCommonModule { }
