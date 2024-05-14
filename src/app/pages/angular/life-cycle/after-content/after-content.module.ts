import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';

import { AfterContentRoutingModule } from './after-content-routing.module';

import { AfterContentComponent } from './after-content/after-content.component';
import { AfterContentParentComponent } from './after-content-parent/after-content-parent.component';
import { ChildContentComponent } from './child-content/child-content.component';


@NgModule({
  declarations: [
    AfterContentComponent,
    AfterContentParentComponent,
    ChildContentComponent,
  ],
  imports: [
    SharedModule,

    AfterContentRoutingModule
  ]
})
export class AfterContentModule { }
