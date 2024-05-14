import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';

import { OnChangesRoutingModule } from './on-changes-routing.module';

import { OnChangesParentComponent } from './on-changes-parent/on-changes-parent.component';
import { OnChangesComponent } from './on-changes/on-changes.component';

@NgModule({
  declarations: [
    OnChangesParentComponent,
    OnChangesComponent
  ],
  imports: [
    SharedModule,

    OnChangesRoutingModule
  ]
})
export class OnChangesModule { }
