import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';

import { StyleRoutingModule } from './style-routing.module';

import { StyleComponent } from './style.component';

@NgModule({
  declarations: [StyleComponent],
  imports: [SharedModule, StyleRoutingModule],
  providers: [],
})
export class StyleModule { }
