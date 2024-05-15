import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';

import { ViewChildRoutingModule } from './view-child-routing.module';

import { ViewChildComponent } from './view-child/view-child.component';
import { ViewChildPanelComponent } from './view-child-panel.component';


@NgModule({
  declarations: [
    ViewChildComponent,
    ViewChildPanelComponent
  ],
  imports: [
    SharedModule,

    ViewChildRoutingModule
  ]
})
export class ViewChildModule { }
