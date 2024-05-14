import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';

import { AngularRoutingModule } from './angular-routing.module';

import { AngularComponent } from './angular.component';

@NgModule({
  declarations: [AngularComponent],
  imports: [SharedModule, AngularRoutingModule],
  providers: [],
})
export class AngularModule { }
