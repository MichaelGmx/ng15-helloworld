import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';

import { CounterSpyRoutingModule } from './counter-spy-routing.module';

import { CounterSpyComponent } from './counter-spy/counter-spy.component';
import { CounterComponent } from './counter/counter.component';
import { CounterSpyDirective } from './counter-spy.directive';


@NgModule({
  declarations: [
    CounterSpyComponent,
    CounterComponent,
    CounterSpyDirective
  ],
  imports: [
    SharedModule,

    CounterSpyRoutingModule
  ]
})
export class CounterSpyModule { }
