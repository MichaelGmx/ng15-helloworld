import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';

import { DoCheckRoutingModule } from './do-check-routing.module';

import { DoCheckParentComponent } from './do-check-parent/do-check-parent.component';
import { DoCheckComponent } from './do-check/do-check.component';


@NgModule({
  declarations: [
    DoCheckParentComponent,
    DoCheckComponent
  ],
  imports: [
    SharedModule,

    DoCheckRoutingModule
  ]
})
export class DoCheckModule { }
