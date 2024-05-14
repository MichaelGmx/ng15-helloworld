import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';

import { PeekABooRoutingModule } from './peek-a-boo-routing.module';

import { PeekABooParentComponent } from './peek-a-boo-parent/peek-a-boo-parent.component';
import { PeekABooComponent } from './peek-a-boo/peek-a-boo.component';

@NgModule({
  declarations: [
    PeekABooParentComponent,
    PeekABooComponent
  ],
  imports: [
    SharedModule,
    
    PeekABooRoutingModule
  ]
})
export class PeekABooModule { }
