import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';

import { AfterViewRoutingModule } from './after-view-routing.module';

import { AfterViewParentComponent } from './after-view-parent/after-view-parent.component';
import { AfterViewComponent } from './after-view/after-view.component';
import { ChildViewComponent } from './child-view/child-view.component';


@NgModule({
  declarations: [
    AfterViewParentComponent,
    AfterViewComponent,
    ChildViewComponent
  ],
  imports: [
    SharedModule,

    AfterViewRoutingModule
  ]
})
export class AfterViewModule { }
