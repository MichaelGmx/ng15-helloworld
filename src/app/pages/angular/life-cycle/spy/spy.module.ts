import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';

import { SpyRoutingModule } from './spy-routing.module';

import { SpyComponent } from './spy/spy.component';
import { SpyDirective } from './spy.directive';

@NgModule({
  declarations: [
    SpyComponent,
    SpyDirective
  ],
  imports: [
    SharedModule,

    SpyRoutingModule
  ]
})
export class SpyModule { }
