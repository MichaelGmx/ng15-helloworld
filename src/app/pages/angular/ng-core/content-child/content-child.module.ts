import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';

import { ContentChildRoutingModule } from './content-child-routing.module';

import { ContentChildComponent } from './content-child/content-child.component';
import { ContentChildPanelComponent } from './content-child-panel.component';
import { ContentChildChildComponent } from './content-child-child.component';


@NgModule({
  declarations: [
    ContentChildComponent,
    ContentChildPanelComponent,
    ContentChildChildComponent,
  ],
  imports: [
    SharedModule,

    ContentChildRoutingModule
  ]
})
export class ContentChildModule { }
