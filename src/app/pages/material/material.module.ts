import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';

import { MaterialRoutingModule } from './material-routing.module';
import { MaterialComponent } from './material.component';


@NgModule({
  declarations: [MaterialComponent],
  imports: [SharedModule, MaterialRoutingModule],
  providers: [],
})
export class MaterialModule { }
